var data =[new Product('Coffee',6,1),new Product('Tea',4,2),new Product('Beer',8,3)];


function Product(name,rating,id){
  this.productName=name;
  this.productRating=rating;
  this.productID=id;
}


module.exports= {

addProduct: function(name,rating){
    var tempProduct = new Product(name,rating,data.length);
    data.push(tempProduct);
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

deleteProduct: function(name){
    for (var i=0;i<data.length;i++){
      if(data[i].productName===name){
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
