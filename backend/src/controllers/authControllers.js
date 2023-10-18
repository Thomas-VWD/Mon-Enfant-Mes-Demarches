const models = require("../models");

const getChildNameAndPassword = (req, res, next) => {
  models.user.findByChildName(req.body.childName).then(([rows]) => {
    const userInDatabase = rows[0];

    if (userInDatabase == null) {
      console.warn("Utilisateur introuvable");
      res.status(401).json({ message: "Invalid credentials. Try again." });
    } else {
      req.user = userInDatabase;
      console.warn("Utilisateur trouvé:", req.user);
      next();
    }
  });
};

module.exports = {
  getChildNameAndPassword,
};
