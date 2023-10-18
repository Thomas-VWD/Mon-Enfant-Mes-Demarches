const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const validateUser = require("./middleware/validators/userValidator");
const authControllers = require("./controllers/authControllers");
const { hashPassword, verifyPassword } = require("./middleware/services/auth");

router.get("/user", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.put("/user/:id", validateUser, hashPassword, userControllers.edit);
router.post("/user", validateUser, hashPassword, userControllers.add);
router.delete("/user/:id", userControllers.destroy);

router.post("/login", authControllers.getChildNameAndPassword, verifyPassword);

module.exports = router;
