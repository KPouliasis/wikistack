'use strict';
const express = require('express');
const router = express.Router();
const pg = require('pg');
const pgConnect = new pg.Client();
const wikistackDB = pgConnect('postgres://localhost:5432/wikistack');


router.get('/', function(req, res, next) {
  console.log(wikistackDB);
  res.send('hello');
});

router.post('/', function() {})

router.get('/add/', function() {})

module.exports = router;
