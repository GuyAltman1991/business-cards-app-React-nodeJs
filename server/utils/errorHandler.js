const chalk = require("chalk");

const handleErrors = (res, status, message) => {
  console.log(chalk.redBright(message));
  return res.status(status).send(message);
};

exports.handleErrors = handleErrors;
