const models = require("../models");

const getChildNameAndPassword = (req, res, next) => {
  models.user.findByChildName(req.body.childName).then(([rows]) => {
    console.warn(req.body.childName);
    const childNameInDatabase = rows[0];

    if (childNameInDatabase == null) {
      console.warn("Utilisateur introuvable");
      res.status(401).json({ message: "Invalid credentials. Try again." });
    } else {
      req.user = childNameInDatabase; // Utilisez req.user au lieu de req.childName
      console.warn("Utilisateur trouvé:", req.user);
      next();
    }
  });
};

module.exports = {
  getChildNameAndPassword,
};
