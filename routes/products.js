var db = require('../db');
var app = require('express').Router();
module.exports = app;

app.get('/',function(req,res,next) {                         //starts search from /products
  res.render('products', { productArray: db.getProducts() });
})

app.get('/:id',function(req,res,next) {
  res.render('product', { product: db.getProduct(+req.params.id) });
})
