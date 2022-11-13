const joi = require("joi");

const registerValidation = (user) => {
  const userSchema = joi.object({
    name: joi.object().keys({
      first: joi.string().min(2).max(256),
      middle: joi.string().min(2).max(256).allow(""),
      last: joi.string().min(2).max(256),
    }),
    isBusiness: joi.boolean(),
    phone: joi
      .string()
      .ruleset.regex(/^05\d([-]{0,1})\d{7}$/)
      .rule({ message: "phone must be numbers" })
      .required(),
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
          "Minimum nine ddddddddddddddd, at least one uppercase letter, one lowercase letter, one number and one special characte",
      }),
    image: joi.object().keys({
      url: joi
        .string()
        .ruleset.regex(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/)
        .rule({
          message: "must be a valid url and must end with jpg|jpeg|png|gif",
        })
        .allow(""),
      alt: joi.string().min(2).max(256).allow(""),
    }),
    address: joi.object().keys({
      state: joi.string().min(2).max(256).allow(""),
      country: joi.string().min(2).max(256),
      city: joi.string().min(2).max(256),
      street: joi.string().min(2).max(256),
      houseNumber: joi.number().min(1 > 0),
      zip: joi.number().min(4),
    }),
  });
  return userSchema.validate(user);
};

module.exports = registerValidation;
