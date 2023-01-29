import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import Info from "@mui/icons-material/Info";
import Favorit from "@mui/icons-material/Favorite";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";

const Footer = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  return (
    <Paper
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="About"
          icon={<Info />}
          onClick={() => navigate(ROUTES.ABOUT)}
        />
        {user && (
          <BottomNavigationAction
            label="Favorit"
            icon={<Favorit />}
            onClick={() => navigate(ROUTES.FAV_CARDS)}
          />
        )}
        {user && user.isBusiness && (
          <BottomNavigationAction
            label="My Cards"
            icon={<AccountBoxOutlinedIcon />}
            onClick={() => navigate(ROUTES.MY_CARDS)}
          />
        )}
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
