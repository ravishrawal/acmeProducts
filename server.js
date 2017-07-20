var express = require('express');
var db=require('./db')
var path =require('path');
var swig = require('swig');
swig.setDefaults({cache:false})
var app = express();
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use('/vendor', express.static(path.join(__dirname,'node_modules')));

app.use('/',function(req,res,next){
  console.log(req.url);
  next();
})

app.get('/',function(req,res,next) {
  res.render('index', { bestProduct: db.highestRatedProduct().productName });
})

app.get('/products',function(req,res,next) {
  res.render('products', { productArray: db.getProducts() });
})

app.get('/products/:id',function(req,res,next) {
  res.render('product', { productArray: db.getProduct(+req.params.id) });
})



var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log('listening on port 3000')
})
