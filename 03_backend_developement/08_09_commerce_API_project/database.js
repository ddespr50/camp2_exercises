const PG = require("pg");
const client = new PG.Client();


client.connect();
let counter = 0;

function insertInBrandsTable(brandsToInsert, total){
  //console.log("log ==>",brandsToInsert.id);
  client.query("INSERT INTO brands (id,title) VALUES($1, $2)",[brandsToInsert.id,brandsToInsert.title],
  //client.query("INSERT INTO brands (id,title) VALUES($1::uuid, $2::varchar)",[brandsToInsert.id,brandsToInsert.title],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else if (counter === total){
        // (counter >= total)
        client.end();
      } else {
        console.log(result);
        counter++;
      }
    }
  );
}

function insertInCategoriesTable(categoriesToInsert, total){
  client.query("INSERT INTO categories (id,decathlon_id,label) VALUES ($1,$2,$3)",[categoriesToInsert.id,categoriesToInsert.decathlon_id,categoriesToInsert.label],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else if (counter === total){
        client.end();
      } else {
        console.log(result);
        counter++;
      }
    }
  );
}

function insertInProductsTable(productsToInsert, total){
  client.query("INSERT INTO products (id,decathlon_id,title,description,brand_id,min_price,max_price,crossed_price,percent_reduction,image_path,rating) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)",[productsToInsert.id,productsToInsert.decathlon_id,productsToInsert.title,productsToInsert.description,productsToInsert.brand_id,productsToInsert.min_price,productsToInsert.max_price,productsToInsert.crossed_price,productsToInsert.percent_reduction,productsToInsert.image_path,productsToInsert.rating],
    function(error, result) {
      if (error) {
        console.warn(error);
      } else if (counter === total){
        client.end();
      } else {
        counter++;
        console.log(result);

      }
    }
  );
}
// // last insert to do 
// function insertInProductsByCategoriesTable(productsByCategoriesToInsert, total){
//   client.query("INSERT INTO productbycategories (id) VALUES ($1)",[productsByCategoriesToInsert.id],
//     function(error, result) {
//       if (error) {
//         console.warn(error);
//       } else if (counter === total){
//         client.end();
//       } else {
//         console.log(result);
//         counter++;
//       }
//     }
//   );
// }




module.exports = {
  insertInBrandsTable: insertInBrandsTable,
  insertInCategoriesTable: insertInCategoriesTable,
  insertInProductsTable: insertInProductsTable,
  insertInProductsByCategoriesTable: insertInProductsByCategoriesTable
};
