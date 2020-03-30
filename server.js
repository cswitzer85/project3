// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");

// Requiring passport as we've configured it
var passport = require("./config/passport");
require("dotenv").config();

//requireing routes folder
const routes = require("./routes");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// We need to use sessions to keep track of our user's login status
app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
app.use(routes);

//Temporary server start before Database exists
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });