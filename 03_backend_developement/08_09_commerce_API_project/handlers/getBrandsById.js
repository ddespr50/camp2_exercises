const PG = require("pg");


function getBrandsbyId (request, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM brands where id = $1",
    [request.params.id],
    function (error, answer){
      if (error){
        console.warn(error);
        result.send("There's no data for your request!");
      }else if(answer.rows.length === 0){
        result.send("There's no data for your request!");
      }else{
        answer.rows.forEach(function(element){
          if (element !== null) {
            result.send(element);
          }
        });
      }
      client.end();
    }
  );
}

module.exports = getBrandsbyId;
