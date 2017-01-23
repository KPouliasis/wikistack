'use strict';
const express = require('express');
const router = express.Router();
const pg = require('pg');
const nj = require('nunjucks')
// const pgConnect = new pg.Client();
// const wikistackDB = pgConnect('postgres://localhost:5432/wikistack');


router.get('/', function(req, res, next) {
  res.redirect('/')
});

// router.post('/', function() {})

router.get('/add/', function(req, res) {
  let object = {authorName:'Kostass',authorEmail:'k@aol.com'}
   nj.render('../views/addpage.html',object)
})


module.exports = router;
