var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, title:"someone", description: "First card"},
    {id: 2, title: "someone else", description: "Second card"}
  ])
});

module.exports = router;
