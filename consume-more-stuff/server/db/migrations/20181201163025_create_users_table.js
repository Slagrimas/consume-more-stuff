
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id');
        table.string('name').notNullable();
        table.string('username').notNullable();
        table.string('email').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('password').notNullable();
        table.integer('status_id').references ('id').inTable('userStatus').nullable();
        table.integer('item_id').references ('id').inTable('items').nullable();
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
