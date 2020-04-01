const path = require("path");
const router = require("express").Router();

//API Routes are not implemented yet. Uncomment code below to use them when they are


// const apiRoutes = require("./api");
 const PizzaRoutes = require("./Pizza-Routes");

// // API Routes
// router.use("/api", apiRoutes);
 router.use("/pizza", PizzaRoutes);


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
