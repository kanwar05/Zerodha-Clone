const { body, validationResult } = require("express-validator");

const validatePhone = [
  body("phone")
    .isLength({
      min: 10,
      max: 10,
    })
    .withMessage("Invalid phone"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validatePhone };
