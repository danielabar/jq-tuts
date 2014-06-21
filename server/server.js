var express = require('express');
var http = require('http');
var path = require('path');
var validator = require('validator');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'sakila'
});

var app = express();

app.use(require('connect-livereload')());
app.use(express.static(path.join(__dirname, '../app')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('port', process.env.PORT || 9000);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// in-memory store of user content
var contents = [];

app.get('/content', function(req, res) {
  var result = contents.length === 0 ? '' : contents[contents.length-1];
  res.json(200, {message: result});
});

app.post('/content', function(req, res) {
  contents.push(validator.escape(req.body.content));
  res.json(200, {message: 'saved'});
});

app.get('/actor', function(req, res) {
  connection.query('SELECT actor_id, first_name, last_name from actor', function(err, rows, fields) {
    if (err) throw err;
    res.json(200, {response: rows});
  });
});

app.get('/actor/:firstLetterOfLastName', function(req, res) {
  var q = validator.escape(req.params.firstLetterOfLastName) + '%';
  connection.query('SELECT actor_id, first_name, last_name FROM actor WHERE last_name LIKE ? ORDER BY last_name', [q], function(err, results) {
    if (err) throw err;
    res.json(200, {response: results});
  });
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Express server listening on port %d in %s mode', port, app.get('env'));
});