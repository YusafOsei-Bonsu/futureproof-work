// Adds the 'email' column to Villains
exports.up = function(knex, Promise) {
    knex.schema.table('Villains', function(table) {
        table.string('email').notNull();
    })
};

// Removes the 'email' column from Villains
exports.down = function(knex, Promise) {
    knex.schema.table('Villains', function(table) {
        table.dropColumn('email');
    })
};
