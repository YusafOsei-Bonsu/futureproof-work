
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Heroes').del()
    .then(function () {
      // Inserts seed entries
      return knex('Heroes').insert([
        {id: 1, forename: 'Steve', surname: 'Rogers', role: 'Captain America'},
        {id: 2, forename: 'Tony', surname: 'Stark', role: 'Iron Man'},
        {id: 3, forename: 'Bruce', surname: 'Banner', role: 'Hulk'}
      ]);
    });
};
