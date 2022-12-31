import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CardActions, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { func, string } from "prop-types";

const CardActionBar = ({ cardId, handleDeleteCard, handleLikeCard, card }) => {
  return (
    <CardActions
      disableSpacing
      sx={{
        p: 2,
        color: "gray",
        justifyContent: "space-between",
        paddingTop: 0,
      }}
    >
      <Box>
        <IconButton
          aria-label="delete card"
          onClick={() => handleDeleteCard(cardId)}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          aria-label="edit card"
          onClick={() =>
            console.log("move to edit card component with " + cardId)
          }
        >
          <CreateIcon />
        </IconButton>
      </Box>
      <Box>
        <IconButton aria-label="phone icon">
          <LocalPhoneIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={() => handleLikeCard(cardId)} />
        </IconButton>
      </Box>
    </CardActions>
  );
};

CardActionBar.prototype = {
  cardId: string.isRequired,
  handleDeleteCard: func.isRequired,
  handleLikeCard: func.isRequired,
};

export default CardActionBar;
