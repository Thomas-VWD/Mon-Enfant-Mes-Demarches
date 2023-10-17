const express = require("express");

const router = express.Router();

const userControllers = require("./controllers/userControllers");
const validateUser = require("./middleware/validators/userValidator");
const authControllers = require("./controllers/authControllers");

router.get("/user", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.put("/user/:id", userControllers.edit);
router.post("/user", validateUser, userControllers.add);
router.delete("/user/:id", userControllers.destroy);

router.post("/login", authControllers.login);

module.exports = router;
