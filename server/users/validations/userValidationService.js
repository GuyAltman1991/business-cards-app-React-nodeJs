const registerValidation = require("./joi/registerValidation");
const loginValidation = require("./joi/loginValidation");
const userUpdateValidation = require("./joi/userUpdateValidation");

const validator = undefined || "Joi";

const validateRegistration = (user) => {
  if (validator === "Joi") return registerValidation(user);
};

const validateLogin = (user) => {
  if (validator === "Joi") return loginValidation(user);
};

const validateUserUpdate = (user) => {
  if (validator === "Joi") return userUpdateValidation(user);
};

exports.validateRegistration = validateRegistration;
exports.validateLogin = validateLogin;
exports.validateUserUpdate = validateUserUpdate;
