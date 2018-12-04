const bookshelf = require("./bookshelf");
require('./Item');
require('./UserStatus');

class User extends bookshelf.Model {
  get tableName() {
    return "users";
  }
  get hasTimestamps() {
    return true;
  }

  itemUserId() {
    return this.hasMany("Item");
  }

  userStatus_id() {
    return this.hasOne("UserStatus");
  }
}
module.exports = bookshelf.model("User", User);
