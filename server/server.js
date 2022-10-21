const express = require("express");
const app = express();
const chalk = require("chalk");

const PORT = process.env.PORT || 8181;
app.listen(PORT, () => {
  console.log(chalk.blueBright(`listening to port ${PORT}`));
});
console.log(chalk.magenta("in server.js"));
