// Requiring our models and passport as we've configured it
const Router = require('express').Router()
var db = require("../models");
var passport = require("../config/passport");

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  Router.post("/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  
  Router.post("/signup", function(req, res) {
    db.User.create(
      req.body
    )
      .then(function(data) {
        console.log(data);
        res.send(data)
        // res.redirect(307, "/login");
      })
      .catch(function(err) {
        console.log(err)
        res.status(401).json(err);
      });
  });

  //Route for deleting user/account
  //might be app.delete
  Router.get("/deleteuser", function(req, res) {
    // delete user from the database
    db.User.destroy({ where: { id: req.user.id } }).then(function (){
      req.logout();
    res.redirect("/");
    })
  });

  // Route for logging user out
  Router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  Router.get("/userData", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        phoneNumber: req.user.phoneNumber,
        streetAddress: req.user.streetAddress,
        city: req.user.city,
        zipcode: req.user.zipcode,
        email: req.user.email,
        id: req.user.id
      });
    }
  });
module.exports = Router;
