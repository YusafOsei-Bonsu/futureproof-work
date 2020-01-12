// Builds the Heroes table
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Heroes', function(table) {
        // the ID field
        table.increments('id');
        table.string('forename').notNullable();
        table.string('surname').notNullable();
        table.string('role').notNullable();        
    })
};

// Deletes the Heroes table
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Heroes');
};
