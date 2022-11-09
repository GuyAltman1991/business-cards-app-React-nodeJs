const registerValidation = require("./joi/registerValidation");
const loginValidation = require("./joi/loginValidation");
const userUpdateValidation = require("./joi/userUpdateValidation");

const validator = "joi" || undefined;

const validateRegistration = (user) => {
  if (validator === "joi") return registerValidation(user);
};

const validateLogin = (user) => {
  if (validator === "joi") return loginValidation(user);
};

module.exports = validateRegistration;
module.exports = validateLogin;
