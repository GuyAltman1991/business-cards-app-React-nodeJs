const config = require("config");
const ENVIRONMENT = config.get("NODE_ENV");

const connectToDb = () => {
  console.log(ENVIRONMENT);
  if (ENVIRONMENT === "development")
    require("./mongodb/connectToMongodbLocally");
  if (ENVIRONMENT === "production") require("./mongodb/connectToAtlas");
};

module.exports = connectToDb;
