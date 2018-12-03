
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('itemStatus').del()
    .then(function () {
      // Inserts seed entries
      return knex('itemStatus').insert([
        {id: 1, name: 'Sold'},
        {id: 2, name: 'For Sale'},
        {id: 3, name: 'Unpublished'},
        {id: 4, name: 'Deleted'},
      ]);
    });
};
