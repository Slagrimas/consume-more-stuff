const bookshelf = require('./bookshelf');

class ItemStatus extends bookshelf.Model {

  get tableName() { return 'itemStatuses' }
  get hasTimestamps() { return false }

  itemStatus_id() {
    return this.belongsToMany('Item', 'itemStatus_id')
  }

}

module.exports = bookshelf.model('ItemStatus', ItemStatus);