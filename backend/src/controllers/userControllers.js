const db = require("../models");
const { hashPassword, checkingUser } = require("../middleware/Auth");

const createUser = async (req, res) => {
  try {
    const { childName, email, password } = req.body;
    const hashedPassword = await hashPassword(password); // Hash du mot de passe
    const userExists = await checkingUser(childName, email);

    if (userExists) {
      res.status(403).json({ error: "Compte déjà existant" });
    } else {
      await db.User.create({
        Child_name: childName,
        mail: email,
        password: hashedPassword,
      });
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("Erreur lors de l'ajout de l'utilisateur dans la base de données");
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { childName, email, password } = req.body;
    const hashedPassword = await hashPassword(password); // Hash du mot de passe

    const updatedUser = await db.User.update(
      {
        Child_name: childName,
        mail: email,
        password: hashedPassword,
      },
      {
        where: { id },
      }
    );

    if (updatedUser[0] === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(
        "Erreur lors de la mise à jour de l'utilisateur dans la base de données"
      );
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await db.User.destroy({
      where: { id },
    });

    if (deletedUser === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(
        "Erreur lors de la suppression de l'utilisateur de la base de données"
      );
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await db.User.findByPk(id);

    if (!user) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(
        "Erreur lors de la récupération de l'utilisateur depuis la base de données"
      );
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await db.User.findAll();

    res.json(users);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(
        "Erreur lors de la récupération des utilisateurs depuis la base de données"
      );
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers,
};
