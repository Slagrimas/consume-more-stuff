const bookshelf = require('./bookshelf');
require('./Item');

class ItemStatus extends bookshelf.Model {

  get tableName() { return 'itemStatus' }
  get hasTimestamps() { return false }

  itemStatus_id() {
    return this.hasMany('Item');
  }

}

module.exports = bookshelf.model('ItemStatus', ItemStatus);