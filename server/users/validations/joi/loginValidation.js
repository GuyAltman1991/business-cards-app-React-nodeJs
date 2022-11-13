const joi = require("joi");

const loginValidation = (user) => {
  const loginSchema = joi.object({
    email: joi
      .string()
      .ruleset.regex(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      .rule({ message: "must be a valid email" }),

    password: joi
      .string()
      .ruleset.regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
      .rule({
        message:
          "Minimum nine characters, at least one uppercase letter, one lowercase letter, one number and one special characte",
      }),
  });

  return loginSchema.validate(user);
};

module.exports = loginValidation;
