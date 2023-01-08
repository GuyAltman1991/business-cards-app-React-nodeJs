import React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import cardType from "../../models/types/cardType";
import { func } from "prop-types";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

const CardComponent = ({ card, handleDeleteCard, handleLikeCard }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 280, m: 2 }} square variant="outlined">
      <CardActionArea
        onClick={() => navigate(`${ROUTES.CARD_DETAILS}/${card.id}`)}
      >
        <CardHead image={card.image} />
        <CardBody card={card} />
      </CardActionArea>

      <CardActionBar
        cardId={card._id}
        handleDeleteCard={handleDeleteCard}
        handleLikeCard={handleLikeCard}
      />
    </Card>
  );
};

Card.prototype = {
  card: cardType.isRequired,
  handleDeleteCard: func.isRequired,
  handleLikeCard: func.isRequired,
};

export default CardComponent;
