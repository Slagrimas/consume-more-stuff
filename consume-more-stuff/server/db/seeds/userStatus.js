
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userStatus').del()
    .then(function () {
      // Inserts seed entries
      return knex('userStatus').insert([
        {id: 1, name: 'Active'},
        {id: 2, name: 'In Active'},
        {id: 3, name: 'Deleted'}
      ]);
    });
};
