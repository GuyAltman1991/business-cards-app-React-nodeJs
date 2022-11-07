const express = require("express");
const app = express();
const chalk = require("chalk");
const { handleErrors } = require("./utils/errorHandler");
const router = require("./router/router");
const cors = require("./middlewares/cors");
const logger = require("./logger/loggerService");

app.use(cors);
app.use(logger);
app.use(express.json());
app.use(express.static("./public"));
app.use(router);

app.use((err, req, res, next) => {
  handleErrors(res, 500, err.message);
});

const PORT = process.env.PORT || 8181;
app.listen(PORT, () => {
  console.log(chalk.blueBright(`listening to port ${PORT}`));
});
console.log(chalk.magenta("in server.js"));
