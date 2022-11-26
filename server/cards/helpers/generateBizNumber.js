const Card = require("../../cards/models/mongodb/Card");

const lodash = require("lodash");

const { handleBadRequest } = require("../../utils/handleErrors");

const generateBizNumber = async () => {
  try {
    const random = lodash.random(1_000_000, 9_000_000);
    const card = await Card.findOne(
      { bizNumber: random },
      { bizNumber: 1, _id: 0 }
    );
    if (card) return generateBizNumber();
    return random;
  } catch (error) {
    return handleBadRequest("generateBizNumber", error);
  }
};

module.exports = generateBizNumber;
