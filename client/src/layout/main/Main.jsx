import React from "react";
import { node } from "prop-types";
import Box from "@mui/material/Box";

const Main = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: "#e3f2fd", minHeight: "85vh" }}>{children}</Box>
  );
};

Main.propTypes = {
  children: node.isRequired,
};

export default Main;
