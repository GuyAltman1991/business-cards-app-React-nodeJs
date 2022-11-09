const {
  find,
  findOne,
  update,
  remove,
  register,
  login,
  changeIsBizStatus,
} = require("../models/userDataAccessService");
const validateLogin = require("../validations/userValidationService");
const validateRegistration = require("../validations/userValidationService");

const getUsers = async () => {
  try {
    const users = await find();
    return Promise.resolve(users);
  } catch (error) {
    return Promise.reject(error);
  }
};

const getUser = async (id) => {
  try {
    const user = await findOne(id);
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
};

const registerUser = async (rawUser) => {
  const { error } = validateRegistration(rawUser);
  try {
    let user = { ...rawUser };
    user.createdAt = new Date();
    user = await register(user);
    return Promise.resolve(user + "success");
  } catch (error) {
    return Promise.reject(error);
  }
};

const loginUser = async (user) => {
  try {
    const { error } = validateLogin(user);
    user = await login(user);
    return Promise.resolve(user + " success");
  } catch (error) {
    return Promise.reject(error);
  }
};

const updateUser = async (id, rawUser) => {
  try {
    let user = { ...rawUser };
    user = await update(id, user);
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
};

const changeUserBusinessStatus = async (userId) => {
  try {
    let user = await changeIsBizStatus(userId);
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
};

const deleteUser = async (id) => {
  try {
    const user = await remove(id);
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.getUsers = getUsers;
exports.getUser = getUser;
exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.changeUserBusinessStatus = changeUserBusinessStatus;
