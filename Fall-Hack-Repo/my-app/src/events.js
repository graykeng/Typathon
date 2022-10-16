const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // the routes are defined here

  // Get all the scoreboard by desc order
  router.get('/event', (req, res, next) => {
    db.query(
      "SELECT userName, score FROM scoreboard order by score DESC;",
      // "INSERT into scoreboard (userName, score) values ('test', 123123)",
      [req.body.name, req.body.score],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({results});
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;