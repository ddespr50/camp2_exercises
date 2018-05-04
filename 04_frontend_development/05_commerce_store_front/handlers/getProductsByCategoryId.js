const PG = require("pg");

// avec callback
// function getProductsByCategoryId (categoryId,result) {
//   const client = new PG.Client();
//   client.connect();
//   client.query(
//     "select products_id from productsbycategories where categories_id=",
//     function (error, answer){
//       if (error){
//         console.warn(error);
//       }else{
//         answer.rows.forEach(function(element){
//           if (element !== null) {
//             result.json(element);
//           }
//         });
//       }
//     }
//   );
// }
//
// module.exports = getProductsByCategoryId;

// avec promesse

function getProductsByCategoryId (categoryId,result) {
  const client = new PG.Client();
  client.connect();
  client.query(
    "select * from products inner join productsbycategories on (products.id = productsbycategories.products_id) where productsbycategories.categories_id = $1::uuid",[categoryId.params.id]
  ).then(answer => {
    result.render("products", {products:answer.rows})
    client.end();
  }).catch(error => {
    result.send(error);
    client.end();
  });
}

module.exports = getProductsByCategoryId;
