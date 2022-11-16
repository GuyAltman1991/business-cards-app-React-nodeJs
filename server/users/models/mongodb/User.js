const mongoose = required("mongoose");
const min2StringRequire = { type: String, minLength: 2, required: true };
const min2StringAllow = { type: String, minLength: 2 };

const userSchema = new mongoose.Schema({
  name: {
    first: min2StringRequire,
    last: min2StringRequire,
  },
  phone: {
    type: String,
    match: RegExp(/^0[0-9]{1,2}(\-?|\s?)[0-9]{3}(\-?|\s?)[0-9]{4}/),
    required,
  },
  email: {
    type: String,
    match: RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),

    required,
  },
  password: {
    type: String,
    match: RegExp(
      /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
    ),
  },
  image: {
    url: {
      type: String,
      match: RegExp(
        /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
      ),
    },
    alt: min2StringRequire,
  },
  address: {
    state: min2StringAllow,
    country: min2StringRequire,
    city: min2StringRequire,
    street: min2StringRequire,
    houseNumber: { type: Number, required: true },
    zip: { type: Number, required: true },
  },
  isAdmin: { type: Boolean, default: false },
  isBusiness: { type: Boolean, default: false },
  createdAt: { type: Date, default: new Date() },
});
