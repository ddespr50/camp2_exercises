const PG = require("pg");

// avec callback
// function getCategories (request, result) {
//   const client = new PG.Client();
//   client.connect();
//   client.query(
//     "SELECT * FROM categories",
//     function (error, answer) {
//       if (error) {
//         console.warn(error);
//       } else {
//         result.render("categories",{categories:answer.rows})
//       // result.json(answer.rows);
//       }
//       client.end();
//     }
//   );
// }

//avec promesse
function getCategories (request, result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "SELECT * FROM categories order by label asc"
  ).then(answer => {
    result.render("categories",{categories:answer.rows})
    client.end();
  }).catch(error => {
    result.send(error);
    client.end();
  });
}

module.exports = getCategories;
