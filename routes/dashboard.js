var express = require('express');
var router = express.Router();

const Barang = require('../model/barang.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard/index');
});

router.post('/store', function(req, res){
  Barang.store(req.body, function(err, result){
      res.redirect('/dashboard');
  });
});
module.exports = router;
