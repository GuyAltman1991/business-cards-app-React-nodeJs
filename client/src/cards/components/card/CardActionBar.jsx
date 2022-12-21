import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CardActions, IconButton } from "@mui/material";
import { Box } from "@mui/system";

const CardActionBar = () => {
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
        <IconButton aria-label="delete card">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="edit card">
          <CreateIcon />
        </IconButton>
      </Box>
      <Box>
        <IconButton aria-label="phne icon">
          <LocalPhoneIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </Box>
    </CardActions>
  );
};

export default CardActionBar;
