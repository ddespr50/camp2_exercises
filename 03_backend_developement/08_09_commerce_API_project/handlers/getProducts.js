const PG = require("pg");


function getProducts(request, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM products",
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

module.exports = getProducts;
