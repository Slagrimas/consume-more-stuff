
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('items', function(table) {
    table.string('title', 75).notNullable();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropColumn('title');
};
