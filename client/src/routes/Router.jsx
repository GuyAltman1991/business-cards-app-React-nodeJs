import React from "react";
import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import Sandbox from "../sandbox/Sandbox";
import LoginPage from "../users/pages/LoginPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import SignUpPage from "../users/pages/SignUpPage";
import CompLogic from "../sandbox/CompLogic";
import StringInterpolation from "../sandbox/StringInterpolation";
import Loops from "../sandbox/Loops";
import InlineStyle from "../sandbox/styles/InlineStyle";
import OnClick from "../sandbox/events/OnClick";
import EventSandbox from "../sandbox/events/EventSandbox";
import RaisingEvents from "../sandbox/events/RaisingEvents";
import HooksSandbox from "../sandbox/hooks/HooksSandbox";
import SetPost from "../sandbox/hooks/use-state/SetPost";
import UseState from "../sandbox/hooks/use-state/UseState";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.SANDBOX} element={<Sandbox />}>
        <Route path="logic" element={<CompLogic />} />
        <Route path="stringInterpolation" element={<StringInterpolation />} />
        <Route path="loops" element={<Loops />} />
        <Route path="inlineStyle" element={<InlineStyle />} />
      </Route>
      <Route path={`${ROUTES.SANDBOX}/events`} element={<EventSandbox />}>
        <Route path="onClick" element={<OnClick />} />
        <Route path="raisingEvent" element={<RaisingEvents />} />
      </Route>
      <Route path={`${ROUTES.SANDBOX}/hooks`} element={<HooksSandbox />}>
        <Route path="setPost" element={<SetPost />} />
        <Route path="useState" element={<UseState />} />
      </Route>

      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route
        path={`${ROUTES.CARD_DETAILS}/:cardId`}
        element={<CardDetailsPage />}
      />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

Router.propTypes = {};

export default Router;
