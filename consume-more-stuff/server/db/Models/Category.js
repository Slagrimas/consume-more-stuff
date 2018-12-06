const bookshelf = require('./bookshelf');
require('./Item');

class Category extends bookshelf.Model {
  get tableName() { return 'categories' }
  get hasTimestamps() { return false }

  category_id() {
    return this.belongsToMany('Item');
  }
}

module.exports = bookshelf.model('Category', Category);