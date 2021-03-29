// Dependencies
const db = require("../models");

// Defining methods
module.exports = {
  findAll: function (req, res) {
    db.Book.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => console.error(err));
  },
//   create: function (req, res) {},
//   findById: function (req, res) {},
//   put: function (req, res) {},
//   remove: function (req, res) {},
};
