var mongoose = require('../modules/database.js');
var Goods = require('../models/goods.js');

function initialise() {
    Goods.insertMany([
        {
            productId: '001',
            salelPrice: '59',
            productName: "扶手椅",
            category: "客厅",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9hZGRhZDI1YTZkNWM2M2I1NjNjN2U5NTk2MGNlZDA3Mi5qcGc_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8xZDExNmU2Nzk0NGQ2N2QxYTg0ODZkZGYzYzJhZmE1Mi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNA_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9kZDE3ODhjNjIyMjhmMGY1MTRmY2I1ZGQxMjZlZGI1YS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNQ_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9mNDU3NDFhNTkwZDIzZDM0NWE0ZmE2ZTJhYmMyMmUzNC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNw_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黄色',
            classify:[
                {color:"白色",price:59,img:"http://591437e7438ad.t73.qifeiye.com/qfy-content/uploads/2017/05/cfca7ea78b64967c60b2fb7e120f9461.jpg"},
                {color:"灰色",price:59,img:"http://591437e7438ad.t73.qifeiye.com/qfy-content/uploads/2017/05/ca8ae8c015e0109e07b1f2ff086de30a.jpg"},
                {color:"橙色",price:59,img:"http://591437e7438ad.t73.qifeiye.com/qfy-content/uploads/2017/05/addad25a6d5c63b563c7e95960ced072.jpg"}
            ]
        },
        {
            productId: '002',
            salelPrice: 205.00,
            salehPircr: 255.00,
            productName: "黑色置物架",
            category: "厨房",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9jMjk3ZDczNzYzOGEyMjIwZTE5YzYwYzZhMGRkY2UxMy00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8wYWU0YzUxYWNhY2VmYmM2NGRlMDk3NWRkMTkzNWVlNi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzg1NA_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9kMjg1MDRmY2VhOTA2MmFlMmM5OGFmMjE3MzVlMTk2MS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzg1Nw_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9mNDU3NDFhNTkwZDIzZDM0NWE0ZmE2ZTJhYmMyMmUzNC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNw_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黑色',
            classify:[
                {color:"白色",price:255.00,img:"http://591437e7438ad.t73.qifeiye.com/qfy-content/uploads/2017/05/63bfe693e9e2cfc5d14f19ec57d67fb9.jpg"},
                {color:"黑色",price:205.00,img:"http://591437e7438ad.t73.qifeiye.com/qfy-content/uploads/2017/05/c297d737638a2220e19c60c6a0ddce13.jpg"},
                {color:"绿色",price:215.00,img:"http://591437e7438ad.t73.qifeiye.com/qfy-content/uploads/2017/05/dd032eba02030846e2fe0dc48961cc29.jpg"}
            ]
        },
        {
            productId: '003',
            salelPrice: '29.00',
            salehPrice: '45.00',
            productName: "收纳盆",
            category: "厨房",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8yN2Q5YzZmODM3MDE2NmUyOTg1MjJjM2FkZjA4NDM1YS5qcGc_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8xNjQ4MWZlYmZmMzIxNmQ4ZmUxNDNjMzQ3ZWRjOTBmZS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzMxMg_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8wYWU0YzUxYWNhY2VmYmM2NGRlMDk3NWRkMTkzNWVlNi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzg1NA_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '白色',
            classify:[
                {color:"白色",price:38.00,img:"http://591437e7438ad.t73.qifeiye.com/qfy-content/uploads/2017/05/27d9c6f8370166e298522c3adf08435a.jpg"},
                {color:"黄色",price:45.00,img:"http://591437e7438ad.t73.qifeiye.com/qfy-content/uploads/2017/05/088c5ce0479f6965e2e11239c6dbc874.jpg"},
                {color:"蓝色",price:29.00,img:"http://591437e7438ad.t73.qifeiye.com/qfy-content/uploads/2017/05/96ba60c31d4b82a23a8a1a04c2d7ab02.jpg"}
            ]
        },
        {
            productId: '004',
            salelPrice: '399',
            productName: "洁具套件",
            category: "浴室",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9mNjFmN2FlYTc1NGJhN2JiMGVjNGE5YjUzOWQ2YzQ4MS5qcGc_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9mZGEwNmM3YWNmMTA0ZGI1ZmQ5MzQ5M2ZlNjEwM2VmYS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzYwNA_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS83OWZjYTg1MTg2MTUwYTI5ODM3MWQwZDMzMDUyNWU5OC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzE4Mw_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黄色',
            classify:[
                {color:"黑色",price:366.00,img:"http://591437e7438ad.t73.qifeiye.com/qfy-content/uploads/2017/05/f61f7aea754ba7bb0ec4a9b539d6c481.jpg"},
                {color:"绿色",price:366.00,img:"http://591437e7438ad.t73.qifeiye.com/qfy-content/uploads/2017/05/d8a6d96d267c20b0eee6cfa74e1dbebe.jpg"}        
            ]
        },
        {
            productId: '005',
            salelPrice: '2659.00',
            salePrice: '2999.00',
            productName: "布艺单人沙发",
            category: "客厅",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS85MjBlMGEzYmQ2NThjYThlODRlNThjZWUwMzA1NWM2MS5qcGc_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS83OWZjYTg1MTg2MTUwYTI5ODM3MWQwZDMzMDUyNWU5OC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzE4Mw_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8wYWU0YzUxYWNhY2VmYmM2NGRlMDk3NWRkMTkzNWVlNi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzg1NA_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黄色',
            classify:[
                {color:"灰色",price:"2999.00",img:"http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS85MjBlMGEzYmQ2NThjYThlODRlNThjZWUwMzA1NWM2MS01MDB4NTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"},
                {color:"绿色",price:"2659.00",img:"http://591437e7438ad.t73.qifeiye.com/qfy-content/uploads/2017/05/28b18c5131fc97e525413312d8f91249.jpg"},
                {color:"蓝色",price:"2999.00",img:"http://591437e7438ad.t73.qifeiye.com/qfy-content/uploads/2017/05/55fa2d76a8d3cdef3500ae49e6910321.jpg"}
            ]
        },
        {
            productId: '006',
            salelPrice: '895',
            productName: "单门镜柜",
            category: "浴室",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9hODdjZDkyYWNjNGRmZjZmYmE3NzJhZDMwOWMzYTdmNS00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS83OWZjYTg1MTg2MTUwYTI5ODM3MWQwZDMzMDUyNWU5OC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzE4Mw_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8wYWU0YzUxYWNhY2VmYmM2NGRlMDk3NWRkMTkzNWVlNi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzg1NA_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黑色',
        },
        {
            productId: '007',
            salelPrice: '69',
            productName: "化妆镜",
            category: "卧室",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8zZTlhODEzYTA1YWY2MzkyNjViZGRjNjc4MDVlMWFiZS5qcGc_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS83OWZjYTg1MTg2MTUwYTI5ODM3MWQwZDMzMDUyNWU5OC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzE4Mw_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8wYWU0YzUxYWNhY2VmYmM2NGRlMDk3NWRkMTkzNWVlNi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzg1NA_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黄色'
        },
        {
            productId: '008',
            salelPrice: '69',
            productName: "衣物收纳",
            category: "浴室",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9hNzk2ZmI0MWE0ZWM5ZjQ0OTRhZTdjYTcwZTMwM2ZkZC00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS83OWZjYTg1MTg2MTUwYTI5ODM3MWQwZDMzMDUyNWU5OC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzE4Mw_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8wYWU0YzUxYWNhY2VmYmM2NGRlMDk3NWRkMTkzNWVlNi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzg1NA_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黄色'
        },
        {
            productId: '009',
            salelPrice: '69',
            productName: "置物挂件",
            category: "浴室",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS80YWFjNjIyZTMzZWQ1MjA0MDY0M2M0ZjVlNmJiYjdhOS5qcGc_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS83OWZjYTg1MTg2MTUwYTI5ODM3MWQwZDMzMDUyNWU5OC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzE4Mw_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8wYWU0YzUxYWNhY2VmYmM2NGRlMDk3NWRkMTkzNWVlNi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzg1NA_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黄色'
        },
        {
            productId: '010',
            salelPrice: '8.00',
            productName: "门把手",
            category: "厨房",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8wYzI3NWQ4OTY1ZmNjM2FiZmNlNDRmNGY0NmQyZTRmMy00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS83OWZjYTg1MTg2MTUwYTI5ODM3MWQwZDMzMDUyNWU5OC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzE4Mw_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8wYWU0YzUxYWNhY2VmYmM2NGRlMDk3NWRkMTkzNWVlNi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzg1NA_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8wYWU0YzUxYWNhY2VmYmM2NGRlMDk3NWRkMTkzNWVlNi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzg1NA_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黄色'
        },
        {
            productId: '011',
            salelPrice: '275.00',
            productName: "木质置物架",
            category: "厨房",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQ zN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8xMGRiMTRlZGY3NTJhMzk2MjNjYjI3MWYwYTFkNzQwZC5qcGc_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS83OWZjYTg1MTg2MTUwYTI5ODM3MWQwZDMzMDUyNWU5OC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzE4Mw_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8wYWU0YzUxYWNhY2VmYmM2NGRlMDk3NWRkMTkzNWVlNi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzg1NA_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9mNDU3NDFhNTkwZDIzZDM0NWE0ZmE2ZTJhYmMyMmUzNC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNw_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黄色'
        },
        {
            productId: '012',
            salelPrice: '299.00',
            productName: "落地灯",
            category: "客厅",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8zYTkxYTBlYTQ2NDMwMjE2YTI0ZDdlY2U1OTc2MDZhMS00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8wYWU0YzUxYWNhY2VmYmM2NGRlMDk3NWRkMTkzNWVlNi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzg1NA_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9kZDE3ODhjNjIyMjhmMGY1MTRmY2I1ZGQxMjZlZGI1YS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNQ_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8wYWU0YzUxYWNhY2VmYmM2NGRlMDk3NWRkMTkzNWVlNi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzg1NA_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黄色'
        },
        {
            productId: '013',
            salelPrice: '299',
            productName: "休闲座椅",
            category: "客厅",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8xYzg2YTQ0OTVhOTVlZDE5NTg2MThiYTgwY2FiY2MzNy5qcGc_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8xZDExNmU2Nzk0NGQ2N2QxYTg0ODZkZGYzYzJhZmE1Mi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNA_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9kZDE3ODhjNjIyMjhmMGY1MTRmY2I1ZGQxMjZlZGI1YS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNQ_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9mNDU3NDFhNTkwZDIzZDM0NWE0ZmE2ZTJhYmMyMmUzNC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNw_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黄色'
        },
        {
            productId: '014',
            salelPrice: '2999.00',
            productName: "单人沙发",
            category: "客厅",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8yY2ZhNjEyMWY4ZDIzOWFlYTIzNjFhMjE4MjIwOWE0MS5qcGc_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8xZDExNmU2Nzk0NGQ2N2QxYTg0ODZkZGYzYzJhZmE1Mi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNA_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9kZDE3ODhjNjIyMjhmMGY1MTRmY2I1ZGQxMjZlZGI1YS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNQ_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9mNDU3NDFhNTkwZDIzZDM0NWE0ZmE2ZTJhYmMyMmUzNC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNw_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黄色'
        },
        {
            productId: '015',
            salelPrice: '219.00',
            productName: "台灯",
            category: "客厅",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8yZmJlYjllN2JjZDkyM2I5NDMwYWUzMTFmYjQ0ZmI3OC5qcGc_p_p100_p_3D.jpgg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8xZDExNmU2Nzk0NGQ2N2QxYTg0ODZkZGYzYzJhZmE1Mi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNA_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9kZDE3ODhjNjIyMjhmMGY1MTRmY2I1ZGQxMjZlZGI1YS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNQ_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9mNDU3NDFhNTkwZDIzZDM0NWE0ZmE2ZTJhYmMyMmUzNC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNw_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黄色'
        },
        {
            productId: '016',
            salelPrice: '399.00',
            productName: "边桌",
            category: "客厅",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS83YTg1NzY5ZWUxYTA5ZWM0NTMwODA5YzYyMjY2NTMzYy5qcGc_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8xZDExNmU2Nzk0NGQ2N2QxYTg0ODZkZGYzYzJhZmE1Mi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNA_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9kZDE3ODhjNjIyMjhmMGY1MTRmY2I1ZGQxMjZlZGI1YS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNQ_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9mNDU3NDFhNTkwZDIzZDM0NWE0ZmE2ZTJhYmMyMmUzNC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNw_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黄色'
        },
        {
            productId: '017',
            salelPrice: '399.00',
            productName: "边桌",
            category: "客厅",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8xZjUzMjA3NGMzNDRjMGM2MTE5NmI1NDgwM2VmMjM2ZC5qcGc_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8xZDExNmU2Nzk0NGQ2N2QxYTg0ODZkZGYzYzJhZmE1Mi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNA_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9kZDE3ODhjNjIyMjhmMGY1MTRmY2I1ZGQxMjZlZGI1YS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNQ_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9mNDU3NDFhNTkwZDIzZDM0NWE0ZmE2ZTJhYmMyMmUzNC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNw_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黑色'
        },
        {
            productId: '018',
            salelPrice: '289.00',
            productName: "双层边桌",
            category: "卧室",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS85ZWNlMmExYTU2YzFiNzQwOWMwMjYzZWFkMmZmZmI1Yi5qcGc_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8xZDExNmU2Nzk0NGQ2N2QxYTg0ODZkZGYzYzJhZmE1Mi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNA_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9kZDE3ODhjNjIyMjhmMGY1MTRmY2I1ZGQxMjZlZGI1YS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNQ_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9mNDU3NDFhNTkwZDIzZDM0NWE0ZmE2ZTJhYmMyMmUzNC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNw_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黄色'
        },
        {
            productId: '019',
            salelPrice: '599.00',
            productName: "靠背椅",
            category: "卧室",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8zNWFlMjc0YTU2NTczYmNhZGYzNGRmYTczNzcyY2U5Zi5qcGc_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8xZDExNmU2Nzk0NGQ2N2QxYTg0ODZkZGYzYzJhZmE1Mi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNA_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9kZDE3ODhjNjIyMjhmMGY1MTRmY2I1ZGQxMjZlZGI1YS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNQ_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9mNDU3NDFhNTkwZDIzZDM0NWE0ZmE2ZTJhYmMyMmUzNC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNw_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黄色'
        },
        {
            productId: '020',
            salelPrice: '499.00',
            productName: "餐厅桌椅",
            category: "餐厅",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8zNWFlMjc0YTU2NTczYmNhZGYzNGRmYTczNzcyY2U5Zi5qcGc_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8xZDExNmU2Nzk0NGQ2N2QxYTg0ODZkZGYzYzJhZmE1Mi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNA_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9kZDE3ODhjNjIyMjhmMGY1MTRmY2I1ZGQxMjZlZGI1YS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNQ_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9mNDU3NDFhNTkwZDIzZDM0NWE0ZmE2ZTJhYmMyMmUzNC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNw_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黄色'
        },
        {
            productId: '021',
            salelPrice: '2499.00',
            productName: "单人沙发G",
            category: "客厅",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS82ZGU3OGNiNjVlN2M3NGE1YTdkNjEwMjVlN2M3ZmU0Zi5qcGc_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8xZDExNmU2Nzk0NGQ2N2QxYTg0ODZkZGYzYzJhZmE1Mi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNA_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9kZDE3ODhjNjIyMjhmMGY1MTRmY2I1ZGQxMjZlZGI1YS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNQ_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9mNDU3NDFhNTkwZDIzZDM0NWE0ZmE2ZTJhYmMyMmUzNC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNw_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黄色'
        },
        {
            productId: '022',
            salelPrice: '49.00',
            productName: "置物架",
            category: "浴室",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS82OTI5ZjUzYmY3YmQxZWQ2ZDNhNTFiZTU5ODgzMDhhOS5qcGc_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8xZDExNmU2Nzk0NGQ2N2QxYTg0ODZkZGYzYzJhZmE1Mi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNA_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9kZDE3ODhjNjIyMjhmMGY1MTRmY2I1ZGQxMjZlZGI1YS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNQ_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8wYWU0YzUxYWNhY2VmYmM2NGRlMDk3NWRkMTkzNWVlNi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzg1NA_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黄色'
        },
        {
            productId: '023',
            salelPrice: '2999.00',
            productName: "真皮沙发",
            category: "客厅",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9lNjJkNzFmYmQ5MWRhM2QyZWI4ZDlhYWQ3ZGI4MzNkNi5qcGc_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8wYWU0YzUxYWNhY2VmYmM2NGRlMDk3NWRkMTkzNWVlNi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzg1NA_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8wYWU0YzUxYWNhY2VmYmM2NGRlMDk3NWRkMTkzNWVlNi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzg1NA_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9mNDU3NDFhNTkwZDIzZDM0NWE0ZmE2ZTJhYmMyMmUzNC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNw_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黄色'
        },
        {
            productId: '024',
            salelPrice: '1650.00',
            productName: "实木抽屉柜",
            category: "卧室",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9lNjJkNzFmYmQ5MWRhM2QyZWI4ZDlhYWQ3ZGI4MzNkNi5qcGc_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8xZDExNmU2Nzk0NGQ2N2QxYTg0ODZkZGYzYzJhZmE1Mi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNA_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9kZDE3ODhjNjIyMjhmMGY1MTRmY2I1ZGQxMjZlZGI1YS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNQ_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9mNDU3NDFhNTkwZDIzZDM0NWE0ZmE2ZTJhYmMyMmUzNC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNw_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黄色'
        },
        {
            productId: '025',
            salelPrice: '69',
            productName: "休闲椅",
            category: "卧室",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8xYmE2NjU5ZWY0OWQyMGE4NjhmY2UzY2YxOTI0OGRiOC5qcGc_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8xZDExNmU2Nzk0NGQ2N2QxYTg0ODZkZGYzYzJhZmE1Mi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNA_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9kZDE3ODhjNjIyMjhmMGY1MTRmY2I1ZGQxMjZlZGI1YS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNQ_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9mNDU3NDFhNTkwZDIzZDM0NWE0ZmE2ZTJhYmMyMmUzNC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNw_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黄色'
        },
        {
            productId: '026',
            salelPrice: '325.00',
            productName: "落地灯F",
            category: "客厅",
            productMsg: '简约流线设计扶手椅，采用全新环保材料，坚硬耐用',
            productImageSmall: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8wNWEwODEzMmY0NzY1ZWQ5NmVlNzBhZjIyOGUyMjU3My5qcGc_p_p100_p_3D.jpg",
            productImageBig: [
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS8xZDExNmU2Nzk0NGQ2N2QxYTg0ODZkZGYzYzJhZmE1Mi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNA_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9kZDE3ODhjNjIyMjhmMGY1MTRmY2I1ZGQxMjZlZGI1YS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNQ_p_p100_p_3D_p_p100_p_3D.jpg" },
                { img: "http://static.qifeiye.com/caches/e74a3dc129ab17d27b9988d4cf40e056/aHR0cDovLzU5MTQzN2U3NDM4YWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNS9mNDU3NDFhNTkwZDIzZDM0NWE0ZmE2ZTJhYmMyMmUzNC5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD0xNDYyNw_p_p100_p_3D_p_p100_p_3D.jpg" }
            ],
            stock: '24',
            color: '黄色'
        },

    ])
}
module.exports = initialise