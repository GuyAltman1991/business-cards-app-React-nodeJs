const joi = require("joi");

const validateCardWithJoi = (card) => {
  const cardSchema = joi.object({
    title: joi.string().min(2).max(256),
    subtitle: joi.string().min(2).max(256),
    description: joi.string().min(2).max(1024),
    phone: joi
      .string()
      .ruleset.regex(/^05\d([-]{0,1})\d{7}$/)
      .rule({ message: "phone must be numbers" })
      .required(),
    web: joi
      .string()
      .ruleset.regex(
        /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/
      )
      .rule({ message: "must be a valid web url" }),
    email: joi
      .string()
      .ruleset.regex(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      .rule({ message: "must be a valid email" }),
    image: joi.object({
      url: joi
        .string()
        .ruleset.regex(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/)
        .rule({
          message: "must be a valid url and must end with jpg|jpeg|png|gif",
        })
        .allow(""),
      alt: joi.string().min(2).max(256).allow(""),
    }),
    address: joi.object({
      state: joi.string().min(2).max(256).allow(""),
      country: joi.string().min(2).max(256),
      city: joi.string().min(2).max(256),
      street: joi.string().min(2).max(256),
      houseNumber: joi.number().min(1),
      //   zip: joi.number().min(1), // not working proparly right now
    }),
    bizNumber: joi.number().allow(""),
    user_id: joi.string().allow(""),
  });
  return cardSchema.validate(card);
};

module.exports = validateCardWithJoi;