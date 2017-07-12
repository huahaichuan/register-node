/**
 * Created by huaha on 2017/6/29.
 */
var express = require('express');
var router = express.Router();
router.get('/',function (req,res,netx) {
    res.render('main/index.html');
});
router.get('/register',function (req,res,netx) {
    res.render('register/index.html');
});
module.exports=router;