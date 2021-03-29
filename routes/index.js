// Dependecies
const path = require("path");
// Allowing express to use this router
const router = require("express").Router();
const apiRoutes = require("./api")

//routes
router.use("/api", apiRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;