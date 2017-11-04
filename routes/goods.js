var express = require('express');
var router = express.Router()
var Goods = require('../models/goods')
var User = require('../models/user')
var mongoose = require('../modules/database.js');

// 获取商品信息
router.get('/allproduct', function (req, res, next) {
    // console.log('asdka')
    // res.send('sdad')
    Goods.find(function (err, result) {
        if (err) {
            res.json({ code: 201, message: err });
            return;
        } else {
            res.json({
                code: 200,
                message: 'successful',
                data: result
            })
        }
    })
})


module.exports = router;