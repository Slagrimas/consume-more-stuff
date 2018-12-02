
exports.up = function(knex, Promise) {
    return knex.schema.createTable('items', function (table) {
    table.increments('id');
    table.integer('category_id').references ('id').inTable('categories').notNullable();
    table.decimal('price').notNullable();
    table.string('description').notNullable();
    table.string('manufacturer').Nullable();
    table.integer('condition_id').references ('id').inTable('conditions').notNullable();
    table.string('dimensions').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('published_at').defaultTo(knex.fn.now());
    table.text('notes').nullable();
    table.integer('status_id').references ('id').inTable('itemStatus').nullable();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('items')
};
