const request = require ("request");
const database = require ("./database");


function getProducts (){
  request (
    {
      url:"https://decath-product-api.herokuapp.com/products",
      method:"GET"
    },
    function (error, response, result){
      const json = JSON.parse(result);
      //console.log(json);
      json.map( element => database.insertInProductsTable(element,json.length));
    }
  );
}
getProducts();

module.exports = getProducts;
