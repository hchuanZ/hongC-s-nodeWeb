var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Zhc' });
});
router.get('/null',function(req,res,next){
  res.render('null',{})
});
module.exports = router;
