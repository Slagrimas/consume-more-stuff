const bookshelf = require("./bookshelf");

class User extends bookshelf.Model {
  get tableName() {
    return "users";
  }
  get hasTimestamps() {
    return true;
  }

  itemUserId() {
    return this.hasMany("Item", "user_id");
  }

  userStatus_id() {
    return this.hasOne("UserStatus", "userStatus_id");
  }
}
module.exports = bookshelf.model("User", User);
