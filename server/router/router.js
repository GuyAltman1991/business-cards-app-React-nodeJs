const express = require("express");
const router = express.Router();

const cardsRestController = require("../cards/routes/cardsRestController");
const usersRestController = require("../users/routes/usersRestController");

router.use("/cards", cardsRestController);
router.use("/users", usersRestController);

module.exports = router;
