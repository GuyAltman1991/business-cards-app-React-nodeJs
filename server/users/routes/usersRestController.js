const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("in get");
  return res.send("in get");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(`in get. the id is ${id}`);
  return res.send(`in get. the id is ${id}`);
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
  const id = req.params.id;
  console.log(`in put. the id is ${id}`);
  res.send(`in put. the id is ${id}`);
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  console.log("in patch" + id);
  res.send("in patch" + id);
});

router.delete("/:id", (req, res) => {
  const userid = req.params.id;
  console.log("in user delete" + id);
  res.send(`in user delete ${userid}`);
});

module.exports = router;
