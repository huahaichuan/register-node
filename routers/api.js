/**
 * Created by huaha on 2017/6/29.
 */
var express = require('express');
var router = express.Router();
var User  =  require('../models/User');

//统一返回格式
var responseData = {
    code:1,
    message:"操作成功！"
};
/**
 * 用户注册
 * 注册逻辑
 * 1.用户名密码不能为空
 * 2.用户名不能重复
 */
router.post('/user/register',function (req,res,netx) {
    var userName = req.body.userName;
    var password = req.body.password;
    if(userName==""){
        responseData.code=2;
        responseData.message="用户名不能为空";
        res.json(responseData);
        return;
    }
    if(password==""){
        responseData.code=3;
        responseData.message="密码不能为空";
        res.json(responseData);
        return;
    }
    User.findOne({username:userName}).then(function (userInfo) {
        if(userInfo){   //数据库中有该记录
            responseData.code=4;
            responseData.message="用户名已经被注册了";
            res.json(responseData);
            return;
        }
        //保存用户信息到数据库
        var user  = new User({username:userName,password:password});
        user.save().then(function (newUserInfo) {
            console.log(newUserInfo);
            res.json(responseData);
        });
    });
});

module.exports=router;