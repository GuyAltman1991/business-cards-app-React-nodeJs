const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("router get");
  return res.send("router get");
});

router.get("/:id", (req, res) => {
  const _id = req.params.id;
  console.log(`get id is ${_id}`);
  return res.send(`get id is ${_id}`);
});

router.post("/", (req, res) => {
  console.log("router post");
  return res.send("in post");
});

router.put("/:id", (req, res) => {
  const _id = req.params.id;
  console.log(`put id is ${_id}`);
  return res.send(`put id is ${_id}`);
});

router.patch("/:id", (req, res) => {
  const _id = req.params.id;
  console.log(`patch id is ${_id}`);
  return res.send(`patch id is ${_id}`);
});

router.delete("/:id", (req, res) => {
  console.log("in cards delete!");
  const card_id = req.params.id;
  res.send(`card delete ${card_id}`);
});

module.exports = router;
