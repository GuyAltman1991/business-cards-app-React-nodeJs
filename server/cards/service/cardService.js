const {
  find,
  findOne,
  create,
  remove,
} = require("../models/cardsAccessDataService");

const getCards = async () => {
  try {
    const cards = await find();
    return Promise.resolve(cards);
  } catch (error) {
    return Promise.reject(error);
  }
};

const getCard = async (id) => {
  try {
    const card = await findOne(id);
    return Promise.resolve(card);
  } catch (error) {
    return Promise.reject(error);
  }
};

const createCard = async (rawCard) => {
  try {
    let card = { ...rawCard };
    card.createdAt = new Date().toLocaleTimeString();
    card = await create(card);
    return Promise.resolve(card);
  } catch (error) {
    return Promise.reject(error);
  }
};

const deleteCard = async (id) => {
  try {
    const card = await remove(id);
    return Promise.resolve(card);
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.getCards = getCards;
exports.getCard = getCard;
exports.createCard = createCard;
exports.deleteCard = deleteCard;
