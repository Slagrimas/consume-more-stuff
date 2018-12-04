const bookshelf = require('./bookshelf');

class Condition extends bookshelf.Model{
  get tableName() { return 'conditions' }
  get hasTimestamps() { return false }

  condition_id(){
    return this.belongsToMany('Item', 'condition_id')
  }
}

module.exports = bookshelf.model('Condition', Condition);