const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("in get");
  return res.send("in get");
});

router.get("/:id", (req, res) => {
  const _id = req.params.id;
  console.log(`in get. the id is ${_id}`);
  return res.send(`in get. the id is ${_id}`);
});

router.post("/", (req, res) => {
  console.log("in post");
  res.send("in post");
});

router.post("/login", (req, res) => {
  console.log("login in post");
  res.send("login in post");
});

router.put("/:id", (req, res) => {
  const _id = req.params.id;
  console.log(`in put. the id is ${_id}`);
  res.send(`in put. the id is ${_id}`);
});

router.patch("/:id", (req, res) => {
  const _id = req.params.id;
  console.log("in patch" + _id);
  res.send("in patch" + _id);
});

router.delete("/:id", (req, res) => {
  const user_id = req.params.id;
  console.log("in user delete" + _id);
  res.send(`in user delete ${user_id}`);
});

module.exports = router;
