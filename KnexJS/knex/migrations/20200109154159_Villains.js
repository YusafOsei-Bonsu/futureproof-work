// Builds the Villains table
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Villains', function(table) {
        table.increments('id');
        table.string('forename').notNullable();
        table.string('surname').notNullable();
        table.string('role').notNullable();  
    })
};

// Deletes the Villains table
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Villains');
};
