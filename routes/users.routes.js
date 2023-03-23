const { Router } = require("express");
const router = Router();

const { getUsers, createUser, updateUser, deleteUser } = require("../controllers/users.controller.js");

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/", deleteUser);

module.exports = router;
