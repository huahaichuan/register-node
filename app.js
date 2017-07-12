/**
 * Created by huaha on 2017/6/29.
 */

//加载express模块
var express = require('express');
//加载模板处理模块
var swig = require('swig');
//加载数据库模块
var mongoose = require('mongoose');
//mongoos加载promise包
mongoose.Promise = global.Promise;
//加载body-parser,用来处理post提交过来得数据
var bodyParser = require('body-parser');
//创建app应用 => NodeJS Http.createServer();
var app = express();


//配置应用模板
//定义当前应用所使用的模块引擎
//第一个参数：模块引擎名称，同时也是模板文件的后缀
//第二个参数：用于解析处理模板内容的方法
app.engine('html',swig.renderFile);
//设置模板文件存放的目录，第一个参数必须是views,第二个参数是目录
app.set('views','./views');
//注册使用的模板引擎，第一个参数必须是view engine
//第二个参数和app.engine这个方法中定义的模板引擎名称（第一个参数）是一致的
app.set('view engine','html');
//在开发过程中，需要取消模板缓存
swig.setDefaults({cache:false});

//bodyparser设置
app.use(bodyParser.urlencoded({extended:true}));
app.use('/public',express.static(__dirname+'/public'));

/**
 * 根据不同功能划分模块
 */
app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));



//链接数据库
mongoose.connect('mongodb://localhost:27017/blog',{useMongoClient:true},function (err) {
    if(err){
        console.log('数据库连接失败');
    }else {
        console.log('数据库连接成功');
        //监听http请求
        app.listen(80);
    }
});
