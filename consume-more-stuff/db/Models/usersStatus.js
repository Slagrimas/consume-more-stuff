class User extends bookshelf.Model {

  get tableName() { return 'users' }
  get hasTimestamps() { return true }
  
  item() {
    return this.hasMany('Item', 'item_id');
  }
   
  

}


module.exports = bookshelf.model ('User', User)