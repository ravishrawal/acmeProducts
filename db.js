var data =[
  new Product('Coffee',6,1),
  new Product('Tea',4,2),
  new Product('Beer',8,3)
];


function Product(name, rating, id){
  this.productName = name;
  this.productRating=rating;
  this.productID=id;
}


module.exports= {

addProduct: function(name,rating){
    if(!name){throw 'Name Is Required'}
    var product = new Product(name,rating,data.length+1);
    data.push(product);
  },

getProducts: function(){
    return data;
  },

getProduct: function(id){
    for (var i=0;i<data.length;i++){
      if(data[i].productID===id){
        return data[i];
      }
    }
    return 'no such product';
  },

deleteProduct: function(id){
    for (var i=0;i<data.length;i++){
      if(data[i].productID===id){
        data.splice(i,1);
      }
    }
  },

highestRatedProduct: function(){
    var maxRating=0;
    var maxProduct;
    for (var i=0;i<data.length;i++){
      if(data[i].productRating > maxRating){
        maxRating = data[i].productRating;
        maxProduct = data[i];
      }
    }
    return maxProduct;
  }

}
