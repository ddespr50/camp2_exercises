const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const getBrands = require ("./handlers/getBrands");
const getCategories = require ("./handlers/getCategories");
const getProducts = require ("./handlers/getProducts");
const getCategoriesbyId = require ("./handlers/getCategoriesbyId");
const getProductsbyId = require ("./handlers/getProductsbyId");
const getBrandsbyId = require ("./handlers/getBrandsbyId");


app.get("/brands", getBrands);
app.get("/categories", getCategories);
app.get("/products", getProducts);
app.get("/categories/:id", getCategoriesbyId);
app.get("/products/:id", getProductsbyId);
app.get("/brands/:id", getBrandsbyId);

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});








// app.get("/brands", function (request, result) {
//   client.query(
//     "SELECT * FROM brands",
//     function (error, answer) {
//       if (error) {
//         console.warn(error);
//       } else {
//         result.json(answer.rows);
//       }
//     }
//   );
// });

// app.get("/brands/:id", function (request, result) {
//   client.query(
//     "SELECT * FROM brands where id = $1",
//     [request.params.id],
//     function (error, answer) {
//       if (error) {
//         console.warn(error);
//       } else {
//         result.json(answer.rows);
//       }
//     }
//   );
// });

// app.get("/categories", function (request, result) {
//   client.query(
//     "SELECT * FROM categories",
//     function (error, answer) {
//       if (error) {
//         console.warn(error);
//       } else {
//         result.json(answer.rows);
//       }
//     }
//   );
// });

// app.get("/categories/:id", function (request, result) {
//   client.query(
//     "SELECT * FROM categories where id = $1",
//     [request.params.id],
//     function (error, answer) {
//       if (error) {
//         console.warn(error);
//       } else {
//         result.json(answer.rows);
//       }
//     }
//   );
// });

// app.get("/products", function (request, result) {
//   client.query(
//     "SELECT * FROM products",
//     function (error, answer) {
//       if (error) {
//         console.warn(error);
//       } else {
//         result.json(answer.rows);
//       }
//     }
//   );
// });

// app.get("/products/:id", function (request, result) {
//   client.query(
//     "SELECT * FROM products where id = $1",
//     [request.params.id],
//     function (error, answer) {
//       if (error) {
//         console.warn(error);
//       } else {
//         result.json(answer.rows);
//       }
//     }
//   );
// });


// app.get("/categories/:id/products", function (request, result) {
//   client.query(
//     "SELECT * FROM products inner join categories on product ",
//     [request.params.id],
//     function (error, answer) {
//       if (error) {
//         console.warn(error);
//       } else {
//         result.json(answer.rows);
//       }
//     }
//   );
// });
