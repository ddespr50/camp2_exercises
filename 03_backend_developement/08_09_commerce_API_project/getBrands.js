const request = require ("request");
const database = require ("./database");


function getBrands (){
  request (
    {
      url:"https://decath-product-api.herokuapp.com/brands",
      method:"GET"
    },
    function (error, response, result){
      const json = JSON.parse(result);
      //console.log(json);
      json.map( element => database.insertInBrandsTable(element,json.length));
    }
  );
}
getBrands();

module.exports = getBrands;
