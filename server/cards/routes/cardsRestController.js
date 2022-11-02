const express = require("express");
const {
  getCards,
  getCard,
  createCard,
  deleteCard,
  updateCard,
  likeCard,
} = require("../service/cardService");
const router = express.Router();
const { handleErrors } = require("../../utils/errorHandler");

router.get("/", async (req, res) => {
  try {
    const cards = await getCards();
    return res.send(cards);
  } catch (error) {
    return handleErrors(res, error.status || 500, error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const card = await getCard(id);
    return res.send(card);
  } catch (error) {
    return handleErrors(res, error.status || 500, error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const card = await createCard(req.body);
    res.status(201).send(card);
  } catch (error) {
    return handleErrors(res, error.status || 500, error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let card = await updateCard(id, req.body);
    return res.send(card);
  } catch (error) {
    return handleErrors(res, 500, error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const userId = "123456";
    const card = await likeCard(id, userId);
    return res.send(card);
  } catch (error) {
    return handleErrors(res, 500, error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const card = await deleteCard(id);
    return res.send(card);
  } catch (error) {
    return handleErrors(res, error.status || 500, error.message);
  }
});

module.exports = router;
