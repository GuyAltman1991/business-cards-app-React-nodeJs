const { handleJoiError } = require("../../utils/errorHandler");
const {
  find,
  findOne,
  update,
  remove,
  register,
  login,
  changeIsBizStatus,
} = require("../models/userDataAccessService");
const {
  validateLogin,
  validateRegistration,
} = require("../validations/userValidationService");

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
  console.log(1);
  const { error } = validateRegistration(rawUser);
  console.log(2);
  if (error) return handleJoiError(error);
  console.log(3);
  try {
    let user = { ...rawUser };
    user.createdAt = new Date();
    user = await register(user);
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
};

const loginUser = async (user) => {
  const { error } = validateLogin(user);
  if (error) return handleJoiError(error);
  try {
    user = await login(user);
    return Promise.resolve(user);
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
