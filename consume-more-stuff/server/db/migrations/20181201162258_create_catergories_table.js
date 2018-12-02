exports.up = function(knex, Promise) {
    return knex.schema.createTable('catergories', function (table) {
        table.increments();
        table.string('type', 25).notNullable();
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('catergories')

};
