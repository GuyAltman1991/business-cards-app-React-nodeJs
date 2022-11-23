const Card = require("./mongodb/Card");

const lodash = require("lodash");

const { handleBadRequest } = require("../../utils/handleErrors");

const generateBizNumber = async () => {
  try {
    const random = lodash.random(1_000_000, 9_000_000);
    const card = await Card.findOne({ bizNumber: random });
    if (card) return generateBizNumber();
    return random;
  } catch (error) {
    return handleBadRequest("generateBizNumber", error);
  }
};

module.exports = generateBizNumber;
