// Dependencies
// Allowing express to use this router
const router = require("express").Router();
const bookRoutes = require("./book");

// Book routes
router.use("/books", bookRoutes);

module.exports = router
