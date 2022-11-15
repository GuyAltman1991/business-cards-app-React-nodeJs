const registerValidation = require("./joi/registerValidation");
const loginValidation = require("./joi/loginValidation");
const userUpdateValidation = require("./joi/userUpdateValidation");

const validator = undefined || "joi";

const validateRegistration = (user) => {
  console.log(4);
  if (validator === "joi") return registerValidation(user);
};

const validateLogin = (user) => {
  if (validator === "joi") return loginValidation(user);
};

exports.validateRegistration = validateRegistration;
exports.validateLogin = validateLogin;

// module.exports = validateRegistration;
// module.exports = validateLogin;
