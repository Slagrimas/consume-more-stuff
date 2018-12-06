const bookshelf = require("./bookshelf");
require('./Condition');
require('./Category');
require('./ItemStatus');
require('./User');

class Item extends bookshelf.Model {
  get tableName() {
    return "items";
  }
  get hasTimestamps() {
    return true;
  }

  user_id() {
    return this.belongsTo('User');
  }

  condition_id() {
    return this.belongsTo('Condition');
  }

  category_id() {
    return this.belongsTo('Category');
  }

  itemStatus_id() {
    return this.belongsTo('ItemStatus');
  }
}

module.exports = bookshelf.model("Item", Item);
