'use strict';

const express = require('express');
const app = express();
const models = require('./models');
const theRouter = require('./routes/wiki');

const morgan = require('morgan');
const nunjucks = require('nunjucks');

const bodyParser = require('body-parser');


app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views',{nocache : true});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/wiki', theRouter);

var syncingPage = models.User.sync({})
.then(function() {
  return models.Page.sync({})
})
.then(function() {
  app.listen(3000, () => console.log('server is listening on port 3000'));
})
.catch(console.error);
// models.db.sync({force: true});
