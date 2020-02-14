const express = require('express');
const queries = require('../db/queries');
const router = express.Router();

// *** GET all shows *** //
router.get('/shows', (req, res, next) => {
  queries.getAll()
  .then((shows) => {
    res.status(200).json(shows);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** GET single show *** //
router.get('/shows/:id', function(req, res, next) {
  queries.getSingle(req.params.id)
  .then(function(show) {
    res.status(200).json(show);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** add show *** //
router.post('/shows', function(req, res, next) {
  queries.add(req.body)
  .then(function(showID) {
    return queries.getSingle(showID);
  })
  .then(function(show) {
    res.json(show);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** update show *** //
router.put('/shows/:id', function(req, res, next) {
  // the if statement ensures the user cannot change the 'id' as this should only be created by the db
  // it should never be updated as this could lead to overwriting an existing record
  if(req.body.hasOwnProperty('id')) {
    return res.status(422).json({
      error: 'You cannot update the id field'
    });
  }
  
  queries.update(req.params.id, req.body)
  .then(function() {
    return queries.getSingle(req.params.id);
  })
  .then(function(show) {
    res.status(200).json(show);
  })
  .catch(function(error) {
    next(error);
  });
});

// *** delete show *** //
router.delete('/shows/:id', function(req, res, next) {
  queries.getSingle(req.params.id)
  .then(function(show) {
    queries.deleteItem(req.params.id)
    .then(function() {
      res.status(200).json(show);
    })
    .catch(function(error) {
      next(error);
    });
  }).catch(function(error) {
    next(error);
  });
});

module.exports = router;
