const express = require("express");
const { handleErrors } = require("../../utils/errorHandler");
const {
  getUser,
  getUsers,
  registerUser,
  loginUser,
  updateUser,
  changeIsBizStatus,
  changeUserBusinessStatus,
  deleteUser,
} = require("../services/userService");
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

router.post("/", async (req, res) => {
  try {
    const user = await registerUser(req.body);
    return res.status(201).send(user);
  } catch (error) {
    return handleErrors(res, error.status || 500, error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await loginUser(req.body);
    res.send(user);
  } catch (error) {
    return handleErrors(res, error.status || 500, error.message);
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await updateUser(id, req.body);
    res.send(user);
  } catch (error) {
    return handleErrors(res, error.status || 500, error.message);
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await changeUserBusinessStatus(id);
    return res.send(user);
  } catch (error) {
    return handleErrors(res, error.status || 500, error.message);
  }
});

router.delete("/:id", async (req, res) => {
  const userid = req.params.id;
  try {
    const user = await deleteUser(userid);
    return res.send(user);
  } catch (error) {
    return handleErrors(res, error.status || 500, error.message);
  }
});

module.exports = router;
