const {
  find,
  findOne,
  create,
  remove,
  update,
  like,
} = require("../models/cardsAccessDataService");
const { validateCard } = require("../validations/cardValidationService");

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
    const { error } = validateCard(rawCard);
    console.log(error.details[0].message);
    let card = { ...rawCard };
    card.createdAt = new Date().toLocaleTimeString();
    card = await create(card);
    return Promise.resolve(card + " success!");
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

const updateCard = async (id, { rawCard }) => {
  try {
    let card = { ...rawCard };
    card = await update(id, card);
    return Promise.resolve(card);
  } catch (error) {
    return Promise.reject(error);
  }
};

const likeCard = async (cardId, userId) => {
  try {
    const card = await like(cardId, userId);
    return Promise.resolve(card);
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.getCards = getCards;
exports.getCard = getCard;
exports.createCard = createCard;
exports.deleteCard = deleteCard;
exports.updateCard = updateCard;
exports.likeCard = likeCard;
