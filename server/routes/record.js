const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
  .collection("records")
  .find({})
  .toArray()
  .then(result => res.json(result))
  .catch(err => console.error(err));
});

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myQuery = { _id: new ObjectId(req.params.id) };
  db_connect
  .collection("records")
  .findOne(myQuery).then(result => res.json(result))
  .catch(err => console.error(err));
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, res) {
  let db_connect = dbo.getDb();
  let myObj = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  db_connect.collection("records").insertOne(myObj)
  .then(result => res.json(result))
  .catch(err => console.error(err));
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, res) {
  let db_connect = dbo.getDb();
  let myQuery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    },
  };
  db_connect
  .collection("records")
  .updateOne(myQuery, newValues)
  .then(result => res.json(result))
  .catch(err => console.error(err));
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, res) => {
  let db_connect = dbo.getDb();
  let myQuery = { _id: new ObjectId(req.params.id) };
  db_connect.collection("records").deleteOne(myQuery)
  .then(result => res.json(result))
  .catch(err => console.error(err));
});

module.exports = recordRoutes;
