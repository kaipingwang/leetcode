var express = require('express');
var solution = require('../Model/solution');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main/home');
});

router.get('/leetcode', function(req, res, next) {
  res.render('main/leetcode');
});
router.get('/leetcode/solve/:num', function(req, res, next) {
  res.render('main/solve',{result:solution[req.params.num]});
});

module.exports = router;
