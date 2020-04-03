var express = require("express");

var router = express.Router();

var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/specialties", function(req, res) {
  db.specialties.findAll({}).then(function(data) {
    res.send(data);
  });
});

router.post("/orders", function(req, res) {
  db.orders.create(
    req.body
  )
  .then(function(data) {
    res.send(data);
  })
  .catch(function(err) {
    console.log(err)
    res.status(401).json(err);
  });
});



// Export routes for server.js to use.
module.exports = router;
