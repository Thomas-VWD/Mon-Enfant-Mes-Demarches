const models = require("../models");

const getChildNameAndPassword = (req, res, next) => {
  models.user.findByChildName(req.body.Child_name).then(([rows]) => {
    const userInDatabase = rows[0];

    if (userInDatabase == null) {
      res.sendStatus(422);
    } else {
      req.user = userInDatabase;
      next();
    }
  });
  res.json({ token: "oui oui, entre !" });
};

module.exports = {
  getChildNameAndPassword,
};
