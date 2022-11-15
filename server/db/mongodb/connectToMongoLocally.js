const mongoose = require("mongoose");
const chalk = require("chalk");

mongoose
  .connect("mongodb://localhost:27017/guy_business_card_app")
  .then(() =>
    console.log(chalk.magentaBright("connected succesfully to mongoDB locally"))
  )
  .catch((error) =>
    console.log(chalk.redBright.bold(`culd not connect to mongoD`))
  );
