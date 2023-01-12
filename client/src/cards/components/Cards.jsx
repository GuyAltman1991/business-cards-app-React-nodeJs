import React from "react";
import CardComponent from "./card/CardComponent";
import { Grid } from "@mui/material";
import { arrayOf } from "prop-types";
import cardType from "../models/types/cardType";

const Cards = ({ cards }) => {
  const handleDeleteCard = (cardId) => {
    console.log("you deleted card no: " + cardId);
  };
  const handleLikeCard = (cardId) => {
    console.log("you liked card no: " + cardId);
  };

  return (
    <Grid container spacing={2} pb={2} sx={{ justifyContent: "space-between" }}>
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={card._id}>
          {" "}
          <CardComponent
            card={card}
            handleDeleteCard={handleDeleteCard}
            handleLikeCard={handleLikeCard}
          />
        </Grid>
      ))}
    </Grid>
  );
};

Cards.prototype = {
  cards: arrayOf(cardType).isRequired,
};

export default Cards;
