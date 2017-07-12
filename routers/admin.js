/**
 * Created by huaha on 2017/6/29.
 */
var express = require('express');
var router = express.Router();
router.get('/user',function (req,res,netx) {
    res.send('Admin-User');
});
module.exports=router;