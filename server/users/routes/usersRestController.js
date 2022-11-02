const express = require("express");
const { handleErrors } = require("../../utils/errorHandler");
const { getUser, getUsers } = require("../services/userService");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await getUsers();
    return res.send(users);
  } catch (error) {
    return handleErrors(res, error.status || 500, error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await getUser(id);
    return res.send(user);
  } catch (error) {
    return handleErrors(res, error.status || 500, error.message);
  }
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
