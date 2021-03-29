// Dependencies
const router = require("express").Router();
const bookController = require("../../controllers/bookController")

// Setting books route to get and create
router.route("/api/books")
.get(bookController.findAll)
.post(bookController.create);

// Setting specifi book route to get, update, or delete the book
router.route("/api/books/:id").get(bookController.findById)
.put(bookController.update)
.delete(bookController.remove)

module.exports = router;