var express = require('express');
var router = express.Router();
const barang = require("../model/barang");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('barang');
});

router.post('store', async function(req, res){
  Inventory.store(req.body, function(err, result){
    res.redirect('/barang');
  })
})
module.exports = router;
