var express = require("express");
var db = require("../models");
var router = express.Router();

router.get("/", function(req, res) {
	db.Burger.findAll({})
  .then(function(dbBurger) {
    res.json(dbBurger);
  })
		
});

router.post("/", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured,
    created_on: req.body.created_on
  }).then(function(dbBurger) {
    res.json(dbBurger);
  });
   
});

router.put("/:id", function(req, res) {
  db.Burger.update(req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
 
});

// Export routes for server.js to use.
module.exports = router;