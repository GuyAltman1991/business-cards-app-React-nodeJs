const ENVIRONMENT = "dev";
// const ENVIRONMENT = "prod";

const connectToDB = () => {
  if (ENVIRONMENT === "dev") require("./dataBases/connectToMongoDB");
  if (ENVIRONMENT === "prod") require("./dataBases/connectToAtlas");
};

module.exports = connectToDB;
