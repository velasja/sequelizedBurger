var express = require("express");
var db = require("../models");
var router = express.Router();

router.get("/", function(req, res) {
	db.Burger.findAll({})
  .then(function(dbBurger) {
    var hbsObject = {
      burgers: dbBurger
    };
    res.render("index", hbsObject);
    console.log(dbBurger);
  })
		
});

router.post("/", function(req, res) {
  db.Burger.create({
    id: req.body.id,
    burger_name: req.body.burger_name
  }).then(function() {
    res.redirect("/");
  });
   
});

router.put("/:id", function(req, res) {
  var condition = req.params.id;
  db.Burger.update({
    devoured: req.body.devoured
  },
    {
      where: {
        id: condition
      }
    }).then(function() {
      res.redirect("/");
    });
 
});
// Export routes for server.js to use.
module.exports = router;