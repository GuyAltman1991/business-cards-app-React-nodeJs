const joi = require("joi");

const loginValidation = (user) => {
  const loginSchema = joi.object({
    email: joi
      .string()
      .ruleset.regex(
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
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
