import React from "react";
import Sandbox from "../Sandbox";
import { AppBar, Toolbar } from "@mui/material";
import NavItem from "../../routes/NavItem";
import { Outlet } from "react-router-dom";

const HooksSandbox = () => {
  return (
    <div>
      <Sandbox position="sticky" />
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem to="setPost" label="set-post" sx={{ color: "black" }} />
          <NavItem to="useState" label="Use-State" sx={{ color: "black" }} />
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
};

export default HooksSandbox;
