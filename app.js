const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const chalk = require('chalk');
const nunjucks = require('nunjucks');
const path = require('path');
// const router = require('./routes');
const PORT = chalk.magenta(1337);

// serve static files
app.use(express.static('/public'));

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// logging middleware
app.use(morgan('dev'));

// routing middleware
// app.use('/', router);

// view engine
app.set('views', path.join(__dirname, '/views'));
const env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.listen(PORT, function() {
  console.log(chalk.blue('listening on port'), PORT);
});
