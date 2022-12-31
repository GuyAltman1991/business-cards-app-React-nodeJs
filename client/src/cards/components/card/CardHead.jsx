import { CardMedia } from "@mui/material";
import React from "react";
import imageType from "../models/types/imageType";

const CardHead = ({ image }) => {
  return (
    <CardMedia component="img" height="194" image={image.url} alt={image.alt} />
  );
};

CardHead.prototype = {
  image: imageType.isRequired,
};

export default CardHead;
