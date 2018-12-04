exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', function (table) {
      table.increments('id');
      table.string('type', 25).notNullable();
    })
};


exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories')

};