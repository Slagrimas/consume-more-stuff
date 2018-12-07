class Item extends bookshelf.Model {

  get tableName() { return 'items' }
  get hasTimestamps() { return true }
  
  item() {
    return this.hasOne('User', 'id');
  }
   
  

}


module.exports = 
  bookshelf.model ('Item', Item)