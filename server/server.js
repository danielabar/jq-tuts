var express = require('express');
var http = require('http');
var path = require('path');
var validator = require('validator');

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

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Express server listening on port %d in %s mode', port, app.get('env'));
});