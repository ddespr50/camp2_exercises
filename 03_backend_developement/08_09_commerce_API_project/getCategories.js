const request = require ("request");
const database = require ("./database");


function getCategories (){
  request (
    {
      url:"https://decath-product-api.herokuapp.com/categories",
      method:"GET"
    },
    function (error, response, result){
      const json = JSON.parse(result);
      //console.log(json);
      json.map( element => database.insertInCategoriesTable(element,json.length));
    }
  );
}
getCategories();

module.exports = getCategories;
