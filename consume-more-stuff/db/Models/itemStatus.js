const bookshelf = require('./bookshelf');
//const User = require('./User'); not needed because of registry instanciation


class ItemStatus extends bookshelf.Model {

  get tableName() { return 'itemStatus' }
  get hasTimestamps() { return false }

  itemStatus_id() {
    return this.belongsToMany('Item', 'itemStatus_id');
  }

}

module.exports = bookshelf.model('ItemStatus', ItemStatus);