const argon2 = require("argon2");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;
      delete req.body.password;

      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyPassword = async (req, res) => {
  try {
    const ok = await argon2.verify(req.user.hashedPassword, req.body.password);
    if (ok) {
      console.warn("Mot de passe correct");
      res.json({ token: "oui, c'est bon" });
    } else {
      console.warn("Mot de passe incorrect");
      res.status(401).json({ message: "Invalid credentials. Try again." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
};
