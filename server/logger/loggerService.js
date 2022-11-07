const express = require("express");
const app = express();
const morganLogger = require("./loggers/morganLogger");

app.use(morganLogger);

const LOGGER = "morgan";
if (LOGGER === "morgan") {
  app.use(morganLogger);
}

module.exports = app;
