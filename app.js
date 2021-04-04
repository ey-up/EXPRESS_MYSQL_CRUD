
const mysql = require("mysql");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const controllers = require("./src/controllers/controller");

app.listen(port);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db",
});
connection.connect();

app.get("/products", (req, res) => {
  controllers.getProducts(res,connection);
});

app.post("/product", (req, res) =>
  controllers.insertProduct(req, res, connection)
);

app.delete("/product/:id", (req, res) => {
  controllers.deleteProduct(req, res, connection);
});

app.put("/product", (req, res) => {
  controllers.updateProduct(req,res,connection);
  
});

app.get("/product/detail/:id", (req, res) => {
  controllers.getProductDetailByProductId(req, res, connection);
});

app.post("/order", (req, res) => {
  controllers.insertOrder(req, res, connection);
});

app.get("/order/:id", (req, res) => {
  controllers.getProductByOrderId(req, res, connection);
});

