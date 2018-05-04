const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const port = process.env.PORT || 3000;

nunjucks.configure("views", {
 autoescape: true,
 express: app
});

app.set("views", __dirname+"/views");
app.set("view engine", "njk");


const getCategories = require ("./handlers/getCategories");

const getProducts = require ("./handlers/getProducts");
const getCategoriesbyId = require ("./handlers/getCategoriesbyId");
const getProductsbyId = require ("./handlers/getProductsbyId");
const getProductsByCategoryId = require ("./handlers/getProductsByCategoryId");



app.get("/", getCategories);
app.get("/categories/:id", getProductsByCategoryId);
app.get("/products/:id", getProductsbyId);
// app.get("/categories/:id/products", getProductsByCategoryId);





app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
