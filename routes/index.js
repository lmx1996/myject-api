var express = require('express');
var router = express.Router()
var mongoose = require('../modules/database.js')
var Good = require('../models/goods')
var User = require('../models/user')
var superagent = require('superagent')

// 加入购物车
router.post('/addCart', function (req, res, next) {
  // 加入购物车必须登录，所以需要userId
  let userId = req.cookies.userId;
  // 商品的ID和商品的数量
  let productId = req.body.productId;
  let productNum = req.body.productNum || 1;
  if (userId) {
    User.find({ userId: userId }, function (err, userDoc) {
      if (err) {
        res.json({
          status: '1',
          msg: err.message,
          result: ''
        })
      } else {
        if (userDoc) {
          var userDoc = userDoc[0]
          var cartItem = '';
          //  购物车有内容
          if (userDoc.cartList.length) {
            // 遍历用户名下的购物车列表
            userDoc.cartList.forEach(item => {
              // 找到该商品
              if (item.productId === productId) {
                cartItem = item;
                item.productNum += productNum;
              }
            })
            if (cartItem) {
              userDoc.save(function (err2, doc2) {
                if (err2) {
                  res.json({
                    status: '1',
                    msg: err2.message,
                    result: ''
                  })
                } else {
                  // 保存成功
                  res.json({
                    status: '0',
                    msg: '加入成功',
                    result: 'suc'
                  })
                }
              })
            }
            // 保存数据
            if (!cartItem) {
              // 没找到
              Good.findOne({ productId: productId }, function (err3, doc3) {
                if (err3) {
                  res.json({
                    status: '1',
                    msg: err3.message,
                    result: ''
                  })
                } else {
                  let doc = {
                    "productId": doc3.productId,
                    "productImg": doc3.productImageBig,
                    "productName": doc3.productName,
                    "checked": "1",
                    "productNum": productNum,
                    "productPrice": doc3.salePrice
                  };
                  userDoc.cartList.push(doc)
                  userDoc.save(function (err2, doc2) {
                    if (err2) {
                      res.json({
                        status: '1',
                        msg: err2.message,
                        result: ''
                      })
                    } else {
                      // 保存成功
                      res.json({
                        status: '0',
                        msg: '加入成功',
                        result: 'suc'
                      })
                    }
                  })
                }
              })
            }

          } else {
            // 没找到
            Good.findOne({ productId: productId }, function (err3, doc3) {
              if (err3) {
                res.json({
                  status: '1',
                  msg: err3.message,
                  result: ''
                })
              } else {
                let doc = {
                  "productId": doc3.productId,
                  "productImg": doc3.productImageBig,
                  "productName": doc3.productName,
                  "checked": "1",
                  "productNum": 1,
                  "productPrice": doc3.salePrice
                };
                userDoc.cartList.push(doc)
                userDoc.save(function (err2, doc2) {
                  if (err2) {
                    res.json({
                      status: '1',
                      msg: err2.message,
                      result: ''
                    })
                  } else {
                    // 保存成功
                    res.json({
                      status: '0',
                      msg: '加入成功',
                      result: 'suc'
                    })
                  }
                })
              }
            })
          }
        } else {
          console.log("没找到用户？？")
          // 直接加入
        }
      }
    })
  } else {
    res.json({
      status: '1',
      msg: '未登录',
      result: ''
    })
  }
})

// 批量加入购物车
router.post('/addCart1', function (req, res) {
  // 获取请求参数，用户id和商品信息（注意：商品信息是数组）
  let userId = req.cookies.userId,
    productMsg = req.body.productMsg;
  // 用户存在，继续操作
  if (userId) {
    // 根据userId查找用户信息
    User.findOne({ userId }, (err, userDoc) => {
      // 查找过程出错，返回错误
      if (err) {
        res.json({
          status: '0',
          msg: err.message,
          result: ''
        })
      } else { // 不出错，分两种情况，一种找不到数据，一种找到数据
        // 找到数据
        if (userDoc) {
          // 已购买的商品的索引
          let sx = [];
          // 新购买的商品
          let newSx = [];
          //  购物车有内容
          if (userDoc.cartList.length) {
            // 遍历用户名下的购物车列表
            userDoc.cartList.forEach((item, i) => {
              // 找到该商品
              productMsg.forEach((pro, j) => {
                if (item.productId === pro.productId) {
                  sx.push(j)
                  item.productNum += pro.productNum
                }
              })
            })
            // 有不是重复的商品（有新买的，原来购物车中不存在的）
            if (sx.length !== productMsg.length) {
              productMsg.forEach((item, i) => {
                if (sx[i] !== i) {//  找到未添加的
                  newSx.push(item)
                }
              })
              let goodList1 = [], goodNum1 = []
              newSx.forEach(item => {
                goodList1.push(item.productId)
                goodNum1.push(item.productNum)
              })
              Good.find({ productId: { $in: goodList1 } }, function (err3, goodDoc) {
                if (err3) {
                  res.json({
                    status: '1',
                    msg: err3.message,
                    result: ''
                  })
                } else {
                  var userCart = []
                  // 返回一个数组
                  goodDoc.forEach((item, i) => {
                    // userCart.push()
                    userDoc.cartList.push({
                      "productId": item.productId,
                      "productImg": item.productImageBig,
                      "productName": item.productName,
                      "checked": "1",
                      "productNum": goodNum1[i],
                      "productPrice": item.salePrice
                    })
                  })
                  // if (userCart.length) {
                  userDoc.save(function (err2, doc2) {
                    if (err2) {
                      res.json({
                        status: '1',
                        msg: err2.message,
                        result: ''
                      })
                    } else {
                      // 保存成功
                      res.json({
                        status: '0',
                        msg: '加入成功',
                        result: 'suc'
                      })
                    }
                  })
                }

                // }
              })
            } else {
              userDoc.save(function (err2, doc2) {
                if (err2) {
                  res.json({
                    status: '1',
                    msg: err2.message,
                    result: ''
                  })
                } else {
                  // 保存成功
                  res.json({
                    status: '0',
                    msg: '加入成功',
                    result: 'suc'
                  })
                }
              })
            }

          } else {
            // 商品信息和商品数量
            var goodList = [], goodNum = []
            // 循环数据赋值
            productMsg.forEach(item => {
              goodList.push(item.productId)
              goodNum.push(item.productNum)
            })
            // 找出相应的商品，并更新productNum字段
            Good.find({ productId: { $in: goodList } }, function (err3, doc) {
              if (err3) {
                res.json({
                  status: '1',
                  msg: err3.message,
                  result: ''
                })
              } else {
                console.log(doc)
                // 返回一个数组
                doc.forEach((item, i) => {
                  userDoc.cartList.push({
                    "productId": item.productId,
                    "productImg": item.productImageBig,
                    "productName": item.productName,
                    "checked": "1",
                    "productNum": goodNum[i],
                    "productPrice": item.salePrice
                  })
                })
                // 真正操作数据库，保存
                userDoc.save(function (err2, doc2) {
                  if (err2) {
                    res.json({
                      status: '1',
                      msg: err2.message,
                      result: ''
                    })
                  } else {
                    // 保存成功
                    res.json({
                      status: '0',
                      msg: '加入成功',
                      result: 'suc'
                    })
                  }
                })
              }
            })
          }
        }
      }
    })
  } else { // 用户不存在，直接返回
    res.json({
      status: '0',
      msg: '未登录',
      result: ''
    })
  }

})

let czUrl = 'http://www.smartisan.com/product/home'

// 转发锤子接口
router.get('/productHome', function (req, res) {
  superagent.get(czUrl).end(function (err, res1) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      let result = JSON.parse(res1.text)
      let home_hot = result.data.home_hot || ['100031816', '100032201', '100025104', '100023501'];
      let home_floors = result.data.home_floors
      let pId = [], // 保存总商品id
        hotId = [], // 热门id
        floorsId = [],// 官方精选 品牌精选
        floorsList = [];
      home_hot.forEach(item => {
        hotId.push(item.spu_id + '01')
        pId.push(item.spu_id + '01')
      })
      home_floors.forEach((item, i) => {
        let tab_items = item.tabs[0].tab_items // 
        floorsId[i] = []
        floorsList[i] = {};
        floorsList[i].tabs = [];
        floorsList[i].image = home_floors[i].tabs[0].tab_items[0]
        floorsList[i].title = home_floors[i].title
        tab_items.forEach(tab => {
          let id = tab.spu_id
          if (id) {
            floorsId[i].push(id + '01') // 存储id
            pId.push(id + '01')
          }
        })
      })
      Good.find({ productId: { $in: pId } }, (goodsErr, goodsDoc) => {
        if (goodsErr) {
          res.json({
            status: '1',
            msg: goodsErr.message,
            result: ''
          })
        } else {
          let hotList = [];
          goodsDoc.forEach(item => {
            let itemId = item.productId;
            hotId.forEach(id => {
              if (itemId === id) {
                hotList.push(item)
              }
            })
            floorsId.forEach((fitem, i) => {
              fitem.forEach(fid => {
                if (itemId === fid) {
                  floorsList[i].tabs.push(item)
                }
              })
            })
          })


          res.json({
            status: '0',
            msg: 'suc',
            result: {
              "home_hot": hotList,
              'home_floors': floorsList
            }
          })
        }
      })


    }
  })
})

// 商品信息
router.get('/productDet', function (req, res) {
  let productId = req.query.productId
  Good.findOne({ productId }, (err, doc) => {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: ''
      })
    } else {
      res.json({
        status: '1',
        msg: 'suc',
        result: doc
      })
    }
  })
})

module.exports = router