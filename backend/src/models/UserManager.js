const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "User" });
  }

  findByChildName(childName) {
    return this.database.query(
      `SELECT childName, hashedPassword from ${this.table} where childName = ?`,
      [childName]
    );
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (childName, email, hashedPassword) VALUES (?,?,?)`,
      [user.childName, user.email, user.hashedPassword]
    );
  }

  update(user) {
    return this.database.query(
      `UPDATE ${this.table} SET childName=?, email=?, hashedPassword =? WHERE id=?`,
      [user.childName, user.email, user.hashedPassword, user.id]
    );
  }
}
module.exports = UserManager;
