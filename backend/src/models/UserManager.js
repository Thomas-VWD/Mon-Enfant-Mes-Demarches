const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "User" });
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (Child_name, email, password) VALUES (?,?,?)`,
      [user.Child_name, user.email, user.password]
    );
  }

  update(user) {
    return this.database.query(
      `UPDATE ${this.table} SET Child_name=?, email=?, password =? WHERE id=?`,
      [user.Child_name, user.email, user.password, user.id]
    );
  }

  findByUsernameWithHashedPassword(user) {
    return this.database.query(
      `SELECT Child_name, password from  ${this.table} where Child_name = ?`,
      [user.Child_name]
    );
  }
}
module.exports = UserManager;
