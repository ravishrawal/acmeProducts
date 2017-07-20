var db = require('../db');
var app = require('express').Router();
module.exports = app;

app.get('/',function(req,res,next) {                         //starts search from /products
  res.render('products', { productArray: db.getProducts() });
})

app.post('/',function(req,res,next) {
  db.addProduct(req.body.name,+req.body.rating);
  res.redirect('/products');
})

app.get('/:id',function(req,res,next) {
  res.render('product', { product: db.getProduct(+req.params.id) });
})

app.delete('/:id',function(req,res,next) {
  db.deleteProduct(+req.params.id);
  res.redirect('/products');
})
