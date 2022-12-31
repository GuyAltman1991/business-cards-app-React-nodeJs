import { arrayOf, number, oneOfType, shape, string } from "prop-types";
import addressType from "./addressType";
import imageType from "./imageType";

const cardType = shape({
  _id: string,
  title: string.isRequired,
  subtitle: string.isRequired,
  description: string.isRequired,
  address: addressType.isRequired,
  image: imageType.isRequired,
  phone: string.isRequired,
  bizNumber: number.isRequired,
  likes: arrayOf(string).isRequired,
  web: oneOfType([string]),
  email: string.isRequired,
  user_id: string.isRequired,
  createdAt: string.isRequired,
});

export default cardType;
