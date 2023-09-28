const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "User" });
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (Child_name, mail, password) VALUES (?,?,?)`,
      [user.Child_name, user.mail, user.password]
    );
  }

  update(user) {
    return this.database.query(
      `UPDATE ${this.table} SET Child_name=?, mail=?, password =? WHERE id=?`,
      [user.Child_name, user.mail, user.password, user.id]
    );
  }
}
module.exports = UserManager;
