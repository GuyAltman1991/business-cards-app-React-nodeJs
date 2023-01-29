import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CardActions, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { func, string } from "prop-types";
import { useUser } from "../../../users/providers/UserProvider";

const CardActionBar = ({
  cardId,
  handleDeleteCard,
  handleLikeCard,
  card,
  cardUserId,
}) => {
  const { user } = useUser();
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
        {user && (user.isAdmin || user._id === cardUserId) && (
          <IconButton
            aria-label="delete card"
            onClick={() => handleDeleteCard(cardId)}
          >
            <DeleteIcon />
          </IconButton>
        )}

        {user && user._id === cardUserId && (
          <IconButton
            aria-label="edit card"
            onClick={() =>
              console.log("move to edit card component with " + cardId)
            }
          >
            <CreateIcon />
          </IconButton>
        )}
      </Box>
      <Box>
        <IconButton aria-label="phone icon">
          <LocalPhoneIcon />
        </IconButton>

        {user && (
          <IconButton
            aria-label="add to favorites"
            onClick={() => handleLikeCard(cardId)}
          >
            <FavoriteIcon />
          </IconButton>
        )}
      </Box>
    </CardActions>
  );
};

CardActionBar.prototype = {
  cardId: string.isRequired,
  handleDeleteCard: func.isRequired,
  handleLikeCard: func.isRequired,
  cardUserId: string.isRequired,
};

export default CardActionBar;
