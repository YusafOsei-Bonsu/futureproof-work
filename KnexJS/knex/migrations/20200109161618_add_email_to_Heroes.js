// Adds the 'email' column to Heroes
exports.up = function(knex, Promise) {
  knex.schema.table('Heroes', function(table) {
      table.string('email').notNull();
  })
};

// Removes the 'email' column from Heroes
exports.down = function(knex, Promise) {
    knex.schema.table('Heroes', function(table) {
        table.dropColumn('email');
    })
};
