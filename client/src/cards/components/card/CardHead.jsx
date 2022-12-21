import { CardMedia } from "@mui/material";
import React from "react";

const CardHead = ({ image }) => {
  return (
    <CardMedia component="img" height="194" image={image.url} alt={image.alt} />
  );
};

export default CardHead;
