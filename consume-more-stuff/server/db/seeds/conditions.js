
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('conditions').del()
    .then(function () {
      // Inserts seed entries
      return knex('conditions').insert([
        {id: 1, name: 'New'},
        {id: 2, name: 'Used'},
        {id: 3, name: 'Excellent'},
        {id: 4, name: 'Fair'},
        {id: 5, name: 'Average'},
        {id: 6, name: 'Salvage'},
        {id: 7, name: 'None'},
      ]);
    });
};
