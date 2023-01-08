// import StringInterpolation from "./StringInterpolation";
// import InlineStyle from "./styles/InlineStyle";
// import CompLogic from "./CompLogic";
// import MuiSandbox from "./mui-sandbox/MuiSandbox";
// import FatherPropsObject from "./props/props-object/FatherPropsObject";
// import FatherPropsString from "./props/props-string/FatherPropsString";
// import FatherPropsTwoKeys from "./props/props-two-keys/FatherPropsTwoKeys";
// import Loops from "./Loops";
// import OnClick from "./events/OnClick";
// import RaisingEvents from "./events/RaisingEvents";
// import FatherAnyAndDefaultProps from "./propTypes/any-and-defaultProps/FatherAnyAndDefaultProps";
// import FatherArrayOfAndObjectOf from "./propTypes/arrays-and-objects/FatherArrayOfAndObjectOf";
// import FatherChildrenAndNode from "./propTypes/children-and-node/FatherChildrenAndNode";
// import FatherExactVsRequired from "./propTypes/exact-vs-required/FatherExactVsRequired";
// import FatherMainTypes from "./propTypes/main-types/FatherMainTypes";
// import FatherOneOfVsOneOfType from "./propTypes/oneOf-vs-oneOfType/FatherOneOfVsOneOfType";
// import FatherPropTypeError from "./propTypes/propType-error/FatherPropTypeError";
// import FatherShape from "./propTypes/shape/FatherShape";
// import UseState from "./hooks/use-state/UseState";
// import UseStateWithComplexObject from "./hooks/use-state/UseStateWithComplexObject";
// import UseStateWithFunction from "./hooks/use-state/UseStateWithFunction";
// import UseStateWithObject from "./hooks/use-state/UseStateWithObject";

import { AppBar, Toolbar } from "@mui/material";
// import SetPost from "./hooks/use-state/SetPost";
import NavItem from "../routes/NavItem";
import { Outlet } from "react-router-dom";
import ROUTES from "../routes/routesModel";

const Sandbox = () => {
  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem to="logic" label="comp-logic" sx={{ color: "black" }} />
          <NavItem
            to="stringInterpolation"
            label="String-Interpolation"
            sx={{ color: "black" }}
          />
          <NavItem to="loops" label="Loops" sx={{ color: "black" }} />
          <NavItem
            to="inlineStyle"
            label="Inline-Style"
            sx={{ color: "black" }}
          />
          <NavItem
            to={`${ROUTES.SANDBOX}/events`}
            label="Events"
            sx={{ color: "black" }}
          />
          <NavItem
            to={`${ROUTES.SANDBOX}/hooks`}
            label="Hooks"
            sx={{ color: "black" }}
          />
        </Toolbar>
      </AppBar>

      {/* <MuiSandbox /> */}

      {/* <FatherPropsString /> */}
      {/* <FatherPropsObject /> */}
      {/* <FatherPropsTwoKeys /> */}

      {/* <FatherPropTypeError /> */}
      {/* <FatherMainTypes /> */}
      {/* <FatherArrayOfAndObjectOf /> */}
      {/* <FatherOneOfVsOneOfType /> */}
      {/* <FatherExactVsRequired /> */}
      {/* <FatherShape /> */}
      {/* <FatherAnyAndDefaultProps /> */}
      {/* <FatherChildrenAndNode /> */}

      {/* <UseStateWithFunction /> */}
      {/* <UseStateWithObject /> */}
      {/* <UseStateWithComplexObject /> */}

      <Outlet />
    </div>
  );
};

export default Sandbox;
