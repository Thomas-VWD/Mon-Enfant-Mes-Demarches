const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const {
  hashPassword,
  // verifyPassword, Will be used when login implemented
  verifyToken,
  checkingUser,
} = require("./middleware/Auth");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const userControllers = require("./controllers/userControllers");

router.post(
  "/users/signup",
  hashPassword,
  checkingUser,
  userControllers.createUser
);
router.put("/users/:id", hashPassword, userControllers.updateUser);
router.delete("/users/:id", verifyToken, userControllers.deleteUser);
router.get("/users/:id", userControllers.getUser);
router.get("/users", userControllers.getUsers);

module.exports = router;
