const DB = process.env.DB || "MONGODB";

const find = async () => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve([{ users: " users in mongodb" }]);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("not in mongodb");
};

const findOne = async (id) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`user no: ${id}`);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return Promise.resolve("not in mongodb");
};

const register = async (user) => {
  if (DB === "MONGODB") {
    try {
      user._id = "12345";
      return Promise.resolve(user);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return Promise.resolve("not in mongodb");
};

const login = async (user) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`in login`);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return Promise.resolve("not in mongodb");
};

const update = async (id, user) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`user no: ${id} updated`);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return Promise.resolve("not in mongodb");
};

const changeIsBizStatus = async (userId) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`user no: ${userId} isBusiness!`);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return Promise.resolve("not in mongodb");
};

const remove = async (id) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`user no: ${id} deleted`);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return Promise.resolve("not in mongodb");
};

exports.find = find;
exports.findOne = findOne;
exports.register = register;
exports.login = login;
exports.remove = remove;
exports.update = update;
exports.changeIsBizStatus = changeIsBizStatus;
