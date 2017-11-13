// 初始化数据库
var initialise = require('./initialise')
var initAdmin=require('./admin');
var article=require('./article.js')
initialise();
initAdmin();
article();
