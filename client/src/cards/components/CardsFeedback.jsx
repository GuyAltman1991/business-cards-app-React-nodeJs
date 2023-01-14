import React from "react";
import { arrayOf, bool, string } from "prop-types";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { Typography } from "@mui/material";
import Cards from "./Cards";
import cardType from "../models/types/cardType";

const CardsFeedback = ({ ispending, error, cards }) => {
  if (ispending) return ispending && <Spinner />;

  if (error) return <Error errorMessage={error} />;

  if (cards && !cards.length)
    return (
      <Typography>
        {" "}
        Oops.. it seems there are no business card to display{" "}
      </Typography>
    );

  if (cards && !!cards.length) return <Cards cards={cards} />;
};

CardsFeedback.propTypes = {
  ispending: bool.isRequired,
  error: string,
  cards: arrayOf(cardType),
};

CardsFeedback.defaultProps = {
  ispending: false,
};

export default CardsFeedback;
