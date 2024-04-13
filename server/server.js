const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { mongoose } = require("mongoose");

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use("/", require("./routes/authRoutes.js"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(" database connection successful");
  })
  .catch((err) => {
    console.log(" database not connected", err);
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is running on port http://localhost:${port}`);
});
