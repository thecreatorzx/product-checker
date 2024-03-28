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

app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  // Process email and password (e.g., save to database)
  console.log("Received name:", name);
  console.log("Received email:", email);
  console.log("Received password:", password);
  // Send response back to client
  if (name) {
    res
      .status(200)
      .json({ success: true, msg: "Received email and password:" });
  }
  if (!name) {
    res.status(400).json({ success: false, msg: "bad request" });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is running on port http://localhost:5000`);
});
