import { string, shape } from "prop-types";

const imageType = shape({
  url: string,
  alt: string,
});

module.exports = imageType;
