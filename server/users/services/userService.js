const {
  find,
  findOne,
  create,
  update,
  remove,
} = require("../models/userDataAccessService");

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

const registerUser = async (rawCard) => {
  try {
    let card = { ...rawCard };
    const user = await create(card);
    return Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
};

// const loginUser = async (rawCard) => {
//     try {
//       let card = { ...rawCard };
//       const user = await create(card);
//       return Promise.resolve(user);
//     } catch (error) {
//       return Promise.reject(error);
//     }
//   };

const updateUser = async (id, rawCard) => {
  try {
    let card = { ...rawCard };
    const user = await update(id, card);
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

const changeIsBizStatus = async (rawCard, userId) => {
  try {
    let card = { ...rawCard };
    const user = await changeIsBizStatus(card, userId);
    Promise.resolve(user);
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.getUsers = getUsers;
exports.getUser = getUser;
exports.registerUser = registerUser;
// exports.loginUser = loginUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.changeIsBizStatus = changeIsBizStatus;
