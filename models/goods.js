var mongoose = require('../modules/database.js');
var productSchema = new mongoose.Schema({
    'productId': String, //产品id
    'salelPrice': Number, //售价
    'salehPrice': Number,
    'productName': String,//产品名称
    'productImageSmall': String,
    'productImageBig': Array,
    'stock': Number,  //存储
    'category': String,
    'limit_num': String, //限制数量
    'productMsg': Object,//产品信息
    'color': String,
    "classify": Array
})
module.exports = mongoose.model('Good', productSchema);