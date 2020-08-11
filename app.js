const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//load our routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const placesRouter = require('./routes/places');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//morgan logger
if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routers handler
app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/places', placesRouter);

//handling operational errors
app.all('*', (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server.`);
  err.status = 'fail';
  err.statusCode = 404;

  next(err);
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
