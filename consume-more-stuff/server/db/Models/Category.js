const bookshelf = require('./bookshelf');

class Category extends bookshelf.Model {
  get tableName() { return 'categories' }
  get hasTimestamps() { return false }

  category_id() {
    return this.belongsToMany('Item', 'category_id')
  }
}

module.exports = bookshelf.model('Category', Category)