const bookshelf = require('./bookshelf');

class UserStatus extends bookshelf.Model{

  get tableName() { return 'userStatuses'}
  get hasTimestamps() { return false }

 userStatus_id(){
   return this.belongsToMany('User', 'userStatus_id')
 } 
}

module.exports = bookshelf.model('UserStatus', UserStatus);