const { handleBadRequest } = require("../../utils/handleErrors");
const { findById } = require("./mongodb/Card");
const Card = require("./mongodb/Card");

const DB = process.env.DB || "MONGODB";

const getCards = async () => {
  if (DB === "MONGODB") {
    try {
      const cards = await Card.find();
      //   throw new Error("Opss... i did it again!");
      return Promise.resolve(cards);
    } catch (error) {
      error.status = 404;
      return handleBadRequest("mongoose", error);
    }
  }
  return Promise.resolve([]);
};

const getMyCards = async (userId) => {
  if (DB === "MONGODB") {
    try {
      const cards = await Card.find({}, { user_id: userId });
      if (!cards) throw new Error("could not find any card in the database");
      return Promise.resolve(cards);
    } catch (error) {
      error.status = 404;
      return handleBadRequest("mongoose", error);
    }
  }
  return Promise.resolve([]);
};

const getCard = async (cardId) => {
  if (DB === "MONGODB") {
    try {
      const card = await Card.findById(cardId);
      if (!card) throw new Error("could not find this card in the database!");
      return Promise.resolve(card);
    } catch (error) {
      error.status = 404;
      return handleBadRequest("mongoose", error);
    }
  }
  return Promise.resolve([]);
};

const createCard = async (normalizedCard) => {
  if (DB === "MONGODB") {
    try {
      let card = new Card(normalizedCard);
      card = await card.save();
      return Promise.resolve(card);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("createCard card not in mongodb");
};

const updateCard = async (cardId, normalizedCard) => {
  if (DB === "MONGODB") {
    try {
      const card = await Card.findByIdAndUpdate(cardId, normalizedCard, {
        new: true,
      });
      if (!card)
        throw new Error(
          "could not update this card becouse a card with this ID cannot be found in the database!"
        );
      return Promise.resolve(card);
    } catch (error) {
      error.status = 400;
      return handleBadRequest("mongoose", error);
    }
  }
  return Promise.resolve("card updateCard not in mongodb");
};

const likeCard = async (cardId, userId) => {
  if (DB === "MONGODB") {
    try {
      const card = await Card.findById(cardId);
      if (!card)
        throw new Error(
          "could not change card like becouse a card with this ID cannot be found in the database!"
        );
      if (card) {
        return Promise.resolve(
          Card.updateOne({ cardId }, { $push: { likes: [userId] } })
        );
      }
    } catch (error) {
      error.status = 400;
      return handleBadRequest("mongoose", error);
    }
  }
  return Promise.resolve("card likeCard not in mongodb");
};

const deleteCard = async (cardId, user) => {
  if (DB === "MONGODB") {
    try {
      const card = await Card.findByIdAndDelete(cardId);
      if (!card)
        throw new Error(
          "could not delete card becouse a card with this ID cannot be found in the database!"
        );
      return Promise.resolve(card);
    } catch (error) {
      error.status = 400;
      return handleBadRequest("mongoose", error);
    }
  }
  return Promise.resolve("card deleted not in mongodb");
};

exports.getCards = getCards;
exports.getMyCards = getMyCards;
exports.getCard = getCard;
exports.createCard = createCard;
exports.updateCard = updateCard;
exports.likeCard = likeCard;
exports.deleteCard = deleteCard;
