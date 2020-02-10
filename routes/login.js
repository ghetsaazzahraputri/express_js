var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
    res.render('login/index', {title: 'Page baru'});
});


var Users = require('../model/users');
/** POST check login  */
router.post('/', async function(req, res){
    const { body } = req;
 Users.authLogin(body, function(err,result){
     res.send({
         result,
         error: err
     })
 })
})
module.exports = router;