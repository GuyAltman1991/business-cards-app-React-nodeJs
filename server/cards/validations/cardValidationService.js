const validateCardWithJoi = require("./joi/validateCardWithJoi");

const validator = undefined || "joi";

const validateCard = (card) => {
  if (validator === "joi") return validateCardWithJoi(card);
};

exports.validateCard = validateCard;
