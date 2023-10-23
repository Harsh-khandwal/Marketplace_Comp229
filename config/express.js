let createError = require("http-errors");
let express = require("express");
let path = require("path");
let logger = require("morgan");

let dress_store = require("../app/routes/dress_store");

let app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", dress_store);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
