const knex = require('./knex.js');

const Shows = () => knex('shows');

/* Queries */

// Presents all shows
const getAll = () => Shows().select();

// Gets a single show based on ID
const getSingle = (showID) => Shows().where('id', parseInt(showID)).first();

// Inserts a show into the 'shows' table
const add = (show) => Shows().insert(show, 'id');

// Updates show
const update = (showID, updates) => Shows().where('id', parseInt(showID)).update(updates);

// Deletes a show
const deleteItem = (showID) => Shows().where('id', parseInt(showID)).del();

module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update,
  deleteItem: deleteItem
};