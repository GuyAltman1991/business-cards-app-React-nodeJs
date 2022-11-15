const express = require("express");
const app = express();
const mongoose = require("mongoose");
const chalk = require("chalk");
const { handleErrors } = require("./utils/errorHandler");
const router = require("./router/router");
const cors = require("./middlewares/cors");
const logger = require("./logger/loggerService");
const connectToDB = require("./db/dbService");
const { required } = require("joi");

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
  connectToDB();
});
console.log(chalk.magenta("in server.js"));

// for tempruari testing
// const min2StringRequire = { type: String, minLength: 2, required: true };
// const cardSchema = new mongoose.Schema({
//   title: min2StringRequire,
//   subTitle: min2StringRequire,
//   description: min2StringRequire,
//   phone: {
//     type: String,
//     match: RegExp(/^0[0-9]{1,2}(\-?|\s?)[0-9]{3}(\-?|\s?)[0-9]{4}/),
//     required,
//   },
//   email: {
//     type: String,
//     match: RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),

//     required,
//   },
// });

// console.log(cardSchema);
