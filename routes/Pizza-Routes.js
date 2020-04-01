var express = require("express");

var router = express.Router();

var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/specialties", function(req, res) {
  db.specialties.findAll({}).then(function(data) {
    res.send(data);
  });
});




// Export routes for server.js to use.
module.exports = router;
