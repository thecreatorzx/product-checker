const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const { connectMongoose , User } = require("./conn.js");

connectMongoose();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../client/public")));


app.get("/", (req, res) => {
    // Send the 'index.html' file as the response
    res.sendFile(path.join(__dirname, "../client/public", "index.html"));
  });
  

app.post("/signup", (req, res) => {
    const { name, email, password } = req.body;
    // Process email and password (e.g., save to database)
    console.log("Received name:", name);
    console.log("Received email:", email);
    console.log("Received password:", password);
    // Send response back to client
    res.send("Received email and password");
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is running on port http://localhost:5000`);
});