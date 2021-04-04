const cors = require("cors");
const mysql = require("mysql");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const controllers = require("./src/controllers/controller");

app.listen(port);
// app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 3 TABLE
// PARENT PRODUCT --> ID DESCRIPTION
// CHİLD --> PARENTPRODUCT_ID ,, ID
// DETAIL CHILD_ID DETAIL

var connection = mysql.createConnection({
  host: "localhost",
  // port : 8080,
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

// Siparişlerin hepsi görüntülenecek
// ürünün detayı düzenlenmesi

// app.put("", (req, res) => {
//   const { name, id } = req.body;

//   connection.query(
//     "UPDATE Products SET name = ? WHERE id =  ? ",
//     [name, id],
//     (err, result) => {
//       if (!err) res.send(JSON.stringify(` ${id} 'li ürün güncellenmiştir.`));
//       else res.status(404).end(JSON.stringify(err));
//     }
//   );
// });

// app.get("/selamlar", (req, res) => {
//   connection.query(
//     "SELECT * FROM Orders, Choise, Products WHERE (Choise.orderId = Orders.id) and Orders.id = 1 and Products.id = Choise.productId",
//     function (error, results) {
//       console.log("girdi");
//       if (error) throw error;
//       else {
//         console.log(results);
//       }
//       res.end(JSON.stringify(`ok`));
//     }
//   );
// });

// app.post("/product/insert", (req, res) => {
//   const {name,details} = req.body;

//   // const isEmpty = values.details.some((item)=>{
//   //   return item == "" || " "
//   // })

//   // connection.query(
//   //   "INSERT INTO Products SET ?",
//   //   values,
//   //   function (error, results, fields) {
//   //     if (error) throw error;
//   //     res.end(JSON.stringify(`${results.insertId} id'li ürün eklenmiştir`));
//   //   }
//   // );

//   let sql = "INSERT INTO Products (name) values ('a','abc') ";

//   connection.query("INSERT INTO Products SET ? ","AS", function(err,results) {
//     if(err) console.log( err);
//     else console.log("oldu")
//   } )

// });
