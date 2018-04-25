const PG = require("pg");


function getCategoriesbyId (request, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM categories where id = $1",
    [request.params.id],
    function (error, answer){
      if (error){
        console.warn(error);
        result.json(error);
      }else if(answer.rows.length === 0){
        result.json("There's no data for your request!");
      }else{
        answer.rows.forEach(function(element){
          if (element !== null) {
            result.json(element);
          }
        });
      }
      client.end();
    }
  );
}

module.exports = getCategoriesbyId;
