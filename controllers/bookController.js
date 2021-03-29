// Dependencies
const db = require("../models");

// Defining methods
module.exports = {
  findAll: function (req, res) {
    db.Book.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => console.error(err));
  },
  create: function (req, res) {
    db.Book.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => console.error(err));
  },
  findById: function (req, res) {
    db.Book.findById({ _id: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => console.log.error(err));
  },
  update: function (req, res) {
    db.Book.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => console.log.error(err));
  },
  remove: function (req, res) {
    db.Book.remove({ _id: req, params, id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => console.log.error(err));
  },
};
