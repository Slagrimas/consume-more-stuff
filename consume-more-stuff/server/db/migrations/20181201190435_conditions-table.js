
exports.up = function(knex, Promise) {
    return knex.schema.createTable('conditions', function (table) {
        table.increments('id');
        table.string('name', 25).notNullable();
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('conditions')
};
