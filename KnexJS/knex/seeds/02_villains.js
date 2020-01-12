
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Villains').del()
    .then(function () {
      // Inserts seed entries
      return knex('Villains').insert([
        {id: 1, forename: 'Loki', surname: 'Laufeyson', role: 'Frost Giant'},
        {id: 2, forename: 'Thanos', surname: 'Titan', role: 'Dark Lord'}
      ]);
    });
};
