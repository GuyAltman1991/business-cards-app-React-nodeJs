const express = require("express");
const {
  getCards,
  getCard,
  createCard,
  deleteCard,
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

router.put("/:id", (req, res) => {
  const id = req.params.id;
  console.log(`put id is ${id}`);
  return res.send(`put id is ${id}`);
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  console.log(`patch id is ${id}`);
  return res.send(`patch id is ${id}`);
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const card = deleteCard(id);
    return res.send(card);
  } catch (error) {
    // return handleErrors(res, error.status || 500, error.message);
  }
});

module.exports = router;
