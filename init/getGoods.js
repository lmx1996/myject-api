var eventproxy = require('eventproxy');
var cheerio = require('cheerio');
var request = require('superagent')
var superagent = require('superagent-charset')(request)
var mongoose = require('../modules/database.js')
let ep = new eventproxy();
let baseUrl = 'http://www.meilele.com';
function getGoods() {
    let requestUrlLength = 1;
    let requestUrl = []; // 请求的url

    requestUrl.push(`${baseUrl}/solr_api/recommend/listpage/?userTags=k0201*s0402*c0102*m0102*g0402*f1502*f1002*k0102*k060b*k6809*k0507*r8905*r0305*k6905*k6605*k6505*k1905*k1705&pageUrl=/category-chuangdian/&pageSize=12`)

    ep.after('grabUrl', requestUrl.length, (data) => {//data是所有数据
        data = JSON.parse(data)
        var goods = data.goods;
        let productUrl = [];
        goods.forEach(function (item) {
            var id = item.id;
            var shopid = item.shop_id;
            var sj = Date.now()
            console.log(sj)
            productUrl.push(`${baseUrl}/mll_api/api/goods_transfee?goods_id=${id}&goods_number=1&shop_id=${shopid}&city_id=0&district_id=0&province_id=0&custom_district=0&_=${sj}`)
            console.log(productUrl)
        });

        ep.after('detailData', productUrl.length, (data) => {
            // console.log(data)
            // data = data.map((item, i) => {
            //     let item1 = JSON.parse(item); //商品信息
            //     let data1 = item1.data;
            //     let pro = {
            //         productId: data1.id,
            //         salePrice: data1.price,
            //         productName: data1.shop_info.title,
            //         sub_title: data1.shop_info.sub_title,// 描述
            //         limit_num: data1.shop_info.limit_num,// 限购
            //         productImageSmall: data1.shop_info.ali_images,// 小图
            //         productImageBig: data1.shop_info.ali_image,// 主题
            //         productMsg: data1.shop_info.tpl_content.base.images.ali,
            //         stock: 10
            //     }
            //     return pro
            // })
            // Good.insertMany(data)
        })

        productUrl.forEach(url => {
            superagent.get(url).end((err2, res2) => {
                ep.emit('detailData', res2.text); // 每次请求的数据 获取id
            })
        })
    })
    requestUrl.forEach((item, i) => {
        superagent.get(item).end((err1, res1) => {
            ep.emit('grabUrl', res1.text); // 每次请求的数据 获取id
        })
    })

}
module.exports=getGoods



// http://www.meilele.com/solr_api/recommend/listpage/?userTags=
// r8902*r0302*k6902*k6802*k6602*k6502*k1902*k1702*k1602*k1502*k1402*k1202*k11
// 02*k0802*k0702*k0602*k0502*k0402&pageUrl=/jiaju/&pageSize=20&_=1509679441968

// http://www.meilele.com/solr_api/recommend/listpage/?userTags=k0101*r8903*r0303*k6903*k6803*k6603*k6503*k1903*k1703*k1603*k1503*k1403*k1203*k1103*k0803*k0703*k0603*k0503&pageUrl=/category-chuang/&pageSize=12