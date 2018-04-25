const PG = require("pg");


function getProductsByCategoryId (categoryId,result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT id FROM categories ",
    function (error, answer){
      if (error){
        console.warn(error);
      }else{
        answer.rows.forEach(function(element){
          if (element !== null) {
            result.json(element);
          }
        });
      }
    }
  );
}

module.exports = getProductsByCategoryId;
