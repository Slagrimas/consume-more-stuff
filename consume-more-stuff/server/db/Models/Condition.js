const bookshelf = require("./bookshelf");
require('./Item');

class Condition extends bookshelf.Model {
  get tableName() {
    return "conditions";
  }
  get hasTimestamps() {
    return false;
  }

  condition_id() {
    return this.hasMany('Item');
  }
}

module.exports = bookshelf.model("Condition", Condition);
