const PG = require("pg");


function getCategories (request, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM categories",
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

module.exports = getCategories;
