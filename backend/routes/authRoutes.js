const express = require("express");
const router = express.Router();

const {
  sendOtp,
  verifyOtp,
  resendOtp,
} = require("../controllers/authController");
const otpLimiter = require("../middleware/rateLimiter");
const { validatePhone } = require("../middleware/validate");

router.post("/send-otp", otpLimiter, validatePhone, sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/resend-otp", resendOtp);

module.exports = router;
