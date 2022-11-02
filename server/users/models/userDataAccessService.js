const DB = process.env.DB || "MONGODB";

const find = async () => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve([{ users: " users in mongodb" }]);
    } catch (error) {
      error.status = 404;
      return Promise.resolve(error);
    }
  }
  return Promise.resolve("not in mongodb");
};

const findOne = async (id) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`user no: ${id}`);
    } catch (error) {
      return Promise.resolve(error);
    }
  }
  return Promise.resolve("not in mongodb");
};

const create = async ({}) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`user no: ${id}`);
    } catch (error) {
      return Promise.resolve(error);
    }
  }
  return Promise.resolve("not in mongodb");
};

const login = async ({}) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`user no: ${id}`);
    } catch (error) {
      return Promise.resolve(error);
    }
  }
  return Promise.resolve("not in mongodb");
};

const update = async (id, {}) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`user no: ${id} updated`);
    } catch (error) {
      return Promise.resolve(error);
    }
  }
  return Promise.resolve("not in mongodb");
};

const remove = async (id) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`user no: ${id} deleted`);
    } catch (error) {
      return Promise.resolve(error);
    }
  }
  return Promise.resolve("not in mongodb");
};

const changeIsBizStatus = async (cardId, userId) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`user no: ${id} isBusiness!`);
    } catch (error) {
      return Promise.resolve(error);
    }
  }
  return Promise.resolve("not in mongodb");
};

exports.find = find;
exports.findOne = findOne;
exports.create = create;
exports.login = login;
exports.remove = remove;
exports.update = update;
exports.changeIsBizStatus = changeIsBizStatus;
