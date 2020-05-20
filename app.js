let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let cors = require('cors');
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let LeadRouter = require('./routes/leader');
let apiTraRouter = require('./routes/api/v1/transfer');
let passport = require('./passport/passport');

let config = require('config');

let app = express();

//commentaar test
//MONGOOSE
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.dbconn ||config.get('Database.conn'), {
  useNewUrlParser: true, useUnifiedTopology: true
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/', indexRouter);
app.use('/users',usersRouter);
app.use('/leaderboard',
passport.authenticate('jwt', { session: false }),
LeadRouter);
app.use('/api/v1/transfer',
 passport.authenticate('jwt', { session: false }),
  apiTraRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
