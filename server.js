var express = require('express');
var db=require('./db')
var path =require('path');
var swig = require('swig');
swig.setDefaults({cache:false})
var app = express();
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use('/vendor', express.static(path.join(__dirname,'node_modules')));
app.use(require('body-parser').urlencoded({ extended: false }));
app.use(require('method-override')('_method'));   //looks in POST for things like ?_method=DELETE

app.use('/',function(req,res,next){
  console.log(req.url);
  next();
})

app.get('/',function(req,res,next) {
  res.render('index', { bestProduct: db.highestRatedProduct() });
})

app.use('/products',require('./routes/products'));

app.use(function(err,req,res,next) {
  res.render('error', { error:err })
})

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log('listening on port 3000')
})
