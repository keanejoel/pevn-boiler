const express = require('express');
const { Client } = require('pg');
require('dotenv').config();

var router = express.Router();

// get posts from database and return results 
router.get('/', (req, res) => {
  const client = new Client();
  const query = {
    text: `SELECT * FROM posts`
  }
  client.connect()
    // when connection is complete the code below will run
    .then(() => {
      return client.query(query);
    })
    .then((results) => {
      res.status(200)
      .json(results.rows);
    })
    .catch((err) => {
      console.log('error', err);
      res.send('Something went wrong');
    });
});

router.post('/', (req, res) => {
  const client = new Client();
  client.connect()
    .then(() => {
      // do query stuff
      const sql = `INSERT INTO posts (id, title, author) VALUES (1, 2, 3)`
      const params = [req.body.id, req.body.title, req.body.author];
      return client.query(sql, params);
    })
    .then((results) => {
      res.status(200);
    })
    .catch((err) => {
      console.log('error', err);
    });
});

module.exports = router;
