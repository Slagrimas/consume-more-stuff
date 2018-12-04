
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id: 1, type: 'Auto'},
        {id: 2, type: 'Clothing'},
        {id: 3, type: 'Electronics'},
        {id: 4, type: 'General'},
        {id: 5, type: 'Services'}
      ]);
    });
};
