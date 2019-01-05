var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
  res.render('admin',{title:"admin"});
});
router.get('/login', function(req, res, next) {
  console.log("logged in")
});

module.exports = router;
