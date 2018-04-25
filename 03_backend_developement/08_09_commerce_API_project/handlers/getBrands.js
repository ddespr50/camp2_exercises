const PG = require("pg");


function getBrands(request, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM brands",
    function (error, answer) {
      if (error) {
        console.warn(error);
      } else {
        result.json(answer.rows);
      }
      client.end();
    }
  );
}

module.exports = getBrands;
