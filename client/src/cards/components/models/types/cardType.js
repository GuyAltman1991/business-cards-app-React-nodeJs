import { arrayOf, number, shape, string } from "prop-types";
import addressType from "./addressType";
import imageType from "./imageType";

const cardType = shape({
  _id: string,
  title: string.isRequired,
  subtitle: string.isRequired,
  description: string.isRequired,
  address: addressType.isRequired,
  image: imageType.isRequired,
  bizNumber: number.isRequired,
  phone: string.isRequired,
  likes: arrayOf(string || undefined.isRequired),
  web: string || undefined.isRequired,
  email: string.isRequired,
  user_id: string.isRequired,
  createdAt: string.isRequired,
});

module.exports = cardType;
