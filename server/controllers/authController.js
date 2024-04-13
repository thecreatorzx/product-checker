const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json("test is working");
};

// signup endpoint
const signUp = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    const user = await User.findOne({ username: username });
    const emailID = await User.findOne({ email: email });
    // Check Username
    if (user) {
      console.log("error", "User already exists");
      res.status(403).json({ success: false, msg: "User already exists" });
      return;
    }
    // Check email
    if (emailID) {
      console.log("error", "Email already exists");
      res.status(403).json({ success: false, msg: "Email already exists" });
      return;
    }
    // hashing the password
    const hashedPassword = await hashPassword(password);

    // Creating user in database
    const newUser = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });
    res
      .status(200)
      .json({ success: true, msg: "Signup successful", data: newUser });
  } catch (err) {
    console.log(err);
  }
};

// login endpoint

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check user exist
    const user = await User.findOne({ email: email });
    if (user) {
      const match = await comparePassword(password, user.password);
      if (match) {
        jwt.sign(
          {
            email: user.email,
            id: user._id,
            name: user.name,
            username: user.username,
          },
          process.env.JWT_SECRET,
          {},
          (err, token) => {
            if (err) throw err;
            res.cookie("token", token).json({
              success: true,
              msg: `welcome ${user.username}`,
              data: user,
            });
          }
        );
      } else {
        console.log("error", "password doesn't match");
        res.status(400).json({ success: false, msg: "password doesn't match" });
      }
    } else {
      console.log("error", "User not registered.");
      res.status(404).json({ success: false, msg: "User not registered." });
    }
  } catch (err) {
    console.log(err);
  }
};

// google login endpoint

const gLogin = async (req, res) => {
  try {
    const user = req.body.data.user;
    const name = user.email.replace("@gmail.com", "");
    if (user)
      res
        .status(200)
        .json({ success: true, msg: "Login Successful", data: user });
    else {
      res.status(400).json({ success: true, msg: "Login failed" });
    }
    const data = {
      email: user.email,
      id: user.uid,
      name: name.slice(1, 6),
      username: name,
    };
    jwt.sign(
      {
        email: data.email,
        id: data.id,
        name: data.name,
        username: data.username,
      },
      process.env.JWT_SECRET,
      {},
      (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json({
          success: true,
          msg: `welcome ${name}`,
          data: data,
        });
      }
    );
  } catch (err) {
    console.log(err);
  }
};

// profile endpoint

const getProfile = (req, res) => {
  let token = req.get("cookie");
  if (token) {
    token = token.replace("token=", "");
    token &&
      jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
        if (err) throw err;
        res.json({
          success: true,
          msg: `welcome ${user.username}`,
          data: user,
        });
      });
  } else {
    res.json({
      success: false,
      msg: "Unable to logout!!",
    });
  }
};
const getLogout = async (req, res) => {
  let token = req.get("cookie");
  if (token) {
    res.cookie("token", "").json({
      success: true,
      msg: `Logged Out`,
    });
  }
  token = req.get("cookie");
};

module.exports = { test, signUp, login, gLogin, getProfile, getLogout };
