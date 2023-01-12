import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import NavItem from "../../routes/NavItem";
import { Outlet } from "react-router-dom";

const CustomHooks = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem
            label="custom-name"
            to="customName"
            sx={{ color: "black" }}
          />
          <NavItem
            to="custom-counter-hook"
            label="custom-counter-hook"
            sx={{ color: "black" }}
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default CustomHooks;
