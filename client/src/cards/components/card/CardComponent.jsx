import React from "react";
import Card from "@mui/material/Card";

import { CardActionArea } from "@mui/material";

import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";

const CardComponent = ({ card, handleCardDelete }) => {
  return (
    <Card sx={{ minWidth: 280, m: 2 }} square raised variant="outlined">
      <CardActionArea>
        <CardHead image={card.image} />
        <CardBody card={card} />
      </CardActionArea>

      <CardActionBar card={card} handleCardDelete={handleCardDelete} />
    </Card>
  );
};

export default CardComponent;
