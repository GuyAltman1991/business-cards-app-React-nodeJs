import React from "react";
import { node } from "prop-types";
import { Paper } from "@mui/material";
import { useTheme } from "../../providers/ThemeProvider";

const Main = ({ children }) => {
  const { isDark } = useTheme();
  return (
    <Paper
      sx={{
        backgroundColor: isDark ? "#333333" : "#e3f2fd",
        minHeight: "85vh",
      }}
    >
      {children}
    </Paper>
  );
};

Main.propTypes = {
  children: node.isRequired,
};

export default Main;
