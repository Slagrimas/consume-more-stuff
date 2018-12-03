const bookshelf = require("./bookshelf");

class Item extends bookshelf.Model {

  get tableName() { return 'items' }
  get hasTimestamps() { return true }

  user_id(){
    return this.belongsTo('User', 'id')
  }

  condition_id(){
    return this.hasOne('Condition', 'id')
  }

  category_id(){
    return this.hasOne('Categories', 'id')
  }

  itemStatus_id(){
    return this.hasOne('ItemStatus', 'id')
  }
  
}

module.exports = bookshelf.model('Item', Item);