const mongoose = required("mongoose");

const min2StringRequire = { type: String, minLength: 2, required: true };
const min2StringAllow = { type: String, minLength: 2 };

const cardSchema = new mongoose.Schema({
  title: min2StringRequire,
  subTitle: min2StringRequire,
  description: min2StringRequire,
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
  web: {
    type: String,
    match: RegExp(
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
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
  bizNumber: { type: Number, minLength: 9, maxLength: 9, required: true },
  createdAt: { type: Date, default: new Date() },
  user_id: new mongoose.Types.ObjectId(),
  likes: [String],
});

module.exports = cardSchema;
