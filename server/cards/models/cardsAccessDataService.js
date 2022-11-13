const DB = process.env.DB || "MONGODB";

const find = async () => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve([{ cards: "in mongodb" }]);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("not in mongodb cards");
};

const findOne = async (id) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve("card no" + id);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return Promise.resolve("not in mongodb get card");
};

const create = async (card) => {
  if (DB === "MONGODB") {
    try {
      card.id = "12345";
      return Promise.resolve(card);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("not in mongodb post");
};

const remove = async (id) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`card no: ${id} deleted`);
    } catch (error) {
      Promise.reject(error);
    }
  }
  return Promise.resolve("not in mongodb remove");
};

const update = async (id, {}) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`card no: ${id} updated`);
    } catch (error) {
      Promise.reject(error);
    }
  }
  return Promise.resolve("not in mongodb update");
};

const like = async (cardId, userId) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`card no: ${cardId} liked`);
    } catch (error) {
      Promise.reject(error);
    }
  }
};

exports.find = find;
exports.findOne = findOne;
exports.create = create;
exports.remove = remove;
exports.update = update;
exports.like = like;
