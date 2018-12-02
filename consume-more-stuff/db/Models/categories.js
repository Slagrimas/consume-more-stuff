class Categories extends bookshelf.Model {

  get tableName() { return 'categories' }
  get hasTimestamps() { return false }
  
  category_id() {
    return this.hasMany('Item', 'category_id');
  }
   
  

}


module.exports = 
  bookshelf.model ('Categories', Categories)