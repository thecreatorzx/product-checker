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

  if (user != null) {
    console.log("error", "User already exists");
    res.status(403).json({ message: "User already exists" });
  } else {
    const newUser = await User.create(req.body);
    console.log("success", "Registered succesfully");
    res.status(200).json({ message: "Signup successful" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (user != null) {
    if (user.password == password) {
      console.log("success", `welcome + ${user.username}`);
      res.status(200).json({ message: `welcome + ${user.username}` });
    } else {
      console.log("error", "password does'nt matched");
      res.status(400).json({ message: "password does'nt matched" });
    }
  } else {
    console.log("error", "username not found");
    res.status(404).json({ message: "username not found" });
  }

  // console.log("Received email:", email);
  // console.log("Received password:", password);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("App is running on port http://localhost:5000");
});
