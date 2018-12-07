const bookshelf = require('./bookshelf');
//const User = require('./User'); not needed because of registry instanciation


class Conditions extends bookshelf.Model {

  get tableName() { return 'conditions' }
  get hasTimestamps() { return false }

  id() {
    return this.belongsToMany('Item', 'condition_id');
  }

}

module.exports = bookshelf.model('Conditions', Conditions);