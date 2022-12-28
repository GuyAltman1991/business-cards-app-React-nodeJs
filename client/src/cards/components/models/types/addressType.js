import { string, shape, number } from "prop-types";

const addressType = shape({
  state: string,
  country: string.isRequired,
  city: string.isRequired,
  street: string.isRequired,
  houseNumber: number.isRequired,
  zip: number,
});

module.exports = addressType;
