const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  signUp,
  login,
  getProfile,
  gLogin,
  getLogout,
} = require("../controllers/authController");

// middleware

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

// routes
router.get("/", test);
router.post("/signup", signUp);
router.post("/login", login);
router.post("/gLogin", gLogin);
router.get("/profile", getProfile);
router.post("/logout", getLogout);

module.exports = router;
