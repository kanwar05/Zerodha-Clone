const User = require("../model/User");
const otpStore = require("../utils/otpStore");
const generateToken = require("../utils/generateToken");

exports.sendOtp = async (req, res) => {
  const { phone } = req.body;

  const otp = Math.floor(1000 + Math.random() * 9000).toString();

  otpStore[phone] = {
    otp,
    expires: Date.now() + 5 * 60 * 1000,
  };

  console.log("OTP:", otp);

  res.json({ message: "OTP sent" });
};

exports.verifyOtp = async (req, res) => {
  const { phone, otp } = req.body;

  const record = otpStore[phone];
  
  if (!record) return res.status(400).json({ message: "No OTP" });
  if (record.otp !== otp)
    return res.status(400).json({ message: "Invalid OTP" });
  if (record.expires < Date.now())
    return res.status(400).json({ message: "Expired OTP" });

  let user = await User.findOne({ phone });

  if (!user) {
    user = await User.create({ phone, isVerified: true });
  }

  const token = generateToken(user);

  delete otpStore[phone];

  res.json({ token });
};

exports.resendOtp = async (req, res) => {
  const { phone } = req.body;

  const otp = Math.floor(1000 + Math.random() * 9000).toString();

  otpStore[phone] = {
    otp,
    expires: Date.now() + 5 * 60 * 1000,
  };

  console.log("Resent OTP:", otp);

  res.json({ message: "OTP resent" });
};
