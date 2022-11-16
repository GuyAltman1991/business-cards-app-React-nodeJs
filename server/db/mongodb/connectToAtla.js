const mongoose = require("mongoose");
const chalk = require("chalk");

mongoose
  .connect(
    "mongodb+srv://guyaltman91:<password>@cluster0.xgdnuvm.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    chalk.magentaBright(console.log("connected successfully to mongoDB atlas"));
  })
  .catch((error) => {
    chalk.redBright(console.log(`could not connect to mongoDB atlas ${error}`));
  });
