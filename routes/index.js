var express = require('express');
var router = express.Router()
var mongoose = require('../modules/database.js')
var Good = require('../models/goods')
var User = require('../models/user')
var superagent = require('superagent')

// 加入购物车


module.exports = router