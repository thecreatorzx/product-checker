const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const { connectMongoose, User } = require("./conn.js");
const cors = require("cors");

connectMongoose();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  // Send the 'index.html' file as the response
  res.send("<h1> Server is live </h1>");
});

app.post("/signup", async (req, res) => {
  const { name, username, email, password } = req.body;

  const user = await User.findOne({ username: username });
  const emailID = await User.findOne({ email: email });

  if (user != null) {
    console.log("error", "User already exists");
    res.status(403).json({ success: false, msg: "User already exists" });
    return;
  }
  if (emailID != null) {
    console.log("error", "Email already exists");
    res.status(403).json({ success: false, msg: "Email already exists" });
    return;
  }
  const newUser = await User.create(req.body);
  console.log("success", "Registered succesfully");
  res.status(200).json({ success: true, msg: "Signup successful" });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (user != null) {
    if (user.password == password) {
      console.log("success", `welcome + ${user.username}`);
      res.status(200).json({
        success: true,
        msg: `welcome ${user.username}`,
        data: { name: user.name, username: user.username },
      });
    } else {
      console.log("error", "password doesn't match");
      res.status(400).json({ success: false, msg: "password doesn't match" });
    }
  } else {
    console.log("error", "username not found");
    res.status(404).json({ success: false, msg: "username not found" });
  }

  // console.log("Received email:", email);
  // console.log("Received password:", password);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("App is running on port http://localhost:5000");
});
