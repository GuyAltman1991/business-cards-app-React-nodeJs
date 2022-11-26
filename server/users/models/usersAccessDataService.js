const { use } = require("../routes/usersRestController");
const userUpdateValidation = require("../validations/Joi/userUpdateValidation");
const User = require("./mongodb/User");
const { pick } = require("lodash");
const normalizeUser = require("../helpers/normalizeUser");
const { compare } = require("bcryptjs");
const { comparePassword } = require("../helpers/bctypt");

const DB = process.env.DB || "MONGODB";

const registerUser = async (normalizeUser) => {
  if (DB === "MONGODB") {
    try {
      const { email } = normalizeUser;
      let user = await User.findOne({ email });
      if (user) throw new Error("user already registerd");

      user = new User(normalizeUser);
      user = await user.save();
      user = pick(user, ["name", "email", "_id"]);
      return Promise.resolve(user);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("registerUser new user not in mongodb");
};

const loginUser = async ({ email, password }) => {
  if (DB === "MONGODB") {
    try {
      const user = await User.findOne({ email });
      if (!user) throw new Error("Invalid email or password");

      const ValidPassword = comparePassword(password, user.password);
      if (!ValidPassword) throw new Error("Invalid email or password");
      // const { email } = normalizeUser;

      return Promise.resolve({ ...user, token: "a2a2a2" });
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("loginUser user not in mongodb");
};

const getUsers = async () => {
  if (DB === "MONGODB") {
    try {
      const users = User.find({}, { password: 0, __v: 0 });
      if (!users) throw new Error("there are no users in the database!");
      return Promise.resolve(users);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get users not in mongodb");
};

const getUser = async (userId) => {
  if (DB === "MONGODB") {
    try {
      const user = await User.findById(userId, {
        password: 0,
        __v: 0,
      });

      if (!user) throw new Error("could not find this user in the database!");
      return Promise.resolve(user);
    } catch (error) {
      error.status = 404;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get user not in mongodb");
};

const updateUser = async (userId, normalizeUser) => {
  if (DB === "MONGODB") {
    try {
      const user = await User.findByIdAndUpdate(userId, normalizeUser, {
        new: true,
      }).select(["-password", "-__v"]);

      if (!user) throw new Error("could not find this user in the database!");

      return Promise.resolve(user);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card update not in mongodb");
};

const changeUserBusinessStatus = async (userId) => {
  if (DB === "MONGODB") {
    try {
      const pipeline = [{ $set: { isBusiness: { $not: "$isBusiness" } } }];
      let user = await User.findByIdAndUpdate(userId, pipeline, {
        new: true,
      }).select({ password: 0, __v: 0 });
      if (!user) throw new Error("could not find this user in the database!");
      return Promise.resolve(user);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card changeUserBusinessStatus not in mongodb");
};

const deleteUser = async (userId) => {
  if (DB === "MONGODB") {
    try {
      const user = User.findByIdAndDelete(userId).select({
        password: 0,
        __v: 0,
      });
      if (!user) throw new Error("could not find this user in the database!");
      return Promise.resolve(user);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("card deleted not in mongodb");
};

exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.updateUser = updateUser;
exports.changeUserBusinessStatus = changeUserBusinessStatus;
exports.deleteUser = deleteUser;
