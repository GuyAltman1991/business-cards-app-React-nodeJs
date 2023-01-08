import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import NavItem from "../../routes/NavItem";
import Sandbox from "../Sandbox";
import { Outlet } from "react-router-dom";

const EventSandbox = () => {
  return (
    <div>
      <Sandbox position="sticky" />
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem to="onClick" label="on-Click" sx={{ color: "black" }} />
          <NavItem
            to="raisingEvent"
            label="Raising Event"
            sx={{ color: "black" }}
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
};

export default EventSandbox;
