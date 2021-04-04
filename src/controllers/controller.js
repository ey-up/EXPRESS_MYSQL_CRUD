// const windows1254 = require('windows-1254');

exports.insertProduct = async (req, res, connection) => {
  await insertProductDb(connection, req.body)
    .then((response) => {
      res.end(JSON.stringify(response));
    })
    .catch((err) => {
      res.status(404).end(JSON.stringify(err));
    });
};

exports.deleteProduct = async (req, res, connection) => {
  await deleteProductFromProductDetailDb(connection, req.params.id);
  await deleteProductDb(connection, req.params.id)
    .then((response) => {
      res.end(JSON.stringify(response));
    })
    .catch((err) => {
      res.status(404).end(JSON.stringify(err));
    });
};

exports.insertOrder = async (req, res, connection) => {
  await insertOrderDb(connection, req.body)
    .then((response) => {
      res.end(JSON.stringify(response));
    })
    .catch((err) => {
      res.status(404).end(JSON.stringify(err));
    });
};

exports.getProductByOrderId = async (req, res, connection) => {
  await getProductByOrderIdDb(connection, req.params.id)
    .then((response) => {
      res.end(JSON.stringify(response));
    })
    .catch((err) => {
      res.status(404).end(JSON.stringify(err));
    });
};

exports.getProductDetailByProductId = async (req, res, connection) => {
  await getProductDetailByProductIdDb(connection, req.params.id)
    .then((response) => {
      res.end(JSON.stringify(response));
    })
    .catch((err) => {
      res.status(404).end(JSON.stringify(err));
    });
};

exports.getProducts = async (res, connection) => {
  await getProductsDb(connection)
    .then((response) => {
      res.end(JSON.stringify(response));
    })
    .catch((err) => {
      res.status(404).end(JSON.stringify(err));
    });
};

exports.updateProduct = async (req, res, connection) => {
  await updateProductDb(connection, req.body)
    .then((response) => {
      res.end(JSON.stringify(response));
    })
    .catch((err) => {
      res.status(404).end(JSON.stringify(err));
    });
};

const insertProductDb = async (connection, body) =>
  new Promise((res, rej) => {
    const { name, details } = body;
    var productId = null;
    const sql = "INSERT INTO Products SET ?";
    const sql2 = "INSERT INTO Product_Detail (productId,detail) VALUES  ?";

    connection.query(sql, { name }, (error, results, fields) => {
      if (error) rej(error);
      else {
        productId = results.insertId;
        let values = details.map((item) => {
          return [productId, item];
        });

        connection.query(sql2, [values], (err, results, fields) => {
          if (err) rej(err);
          res(`id:${productId} was added to db `);
        });
      }
    });
  });

const deleteProductFromProductDetailDb = async (connection, id) =>
  new Promise((resolved, rejected) => {
    const sql1 = "DELETE from Product_Detail WHERE productId = ?";

    connection.query(sql1, id, (err, results) => {
      if (err) rejected(err);
      else resolved("success");
    });
  });

const deleteProductDb = async (connection, id) =>
  new Promise((resolved, rejected) => {
    const sql2 = "DELETE from Products WHERE productId = ?";
    connection.query(sql2, id, (error, results) => {
      if (error) rejected(error);
      else resolved(`${id} id'li ürün silinmiştir`);
    });
  });

const insertOrderDb = async (connection, body) =>
  new Promise((res, rej) => {
    const { userId, products } = body;
    var orderId = null;

    const sql = "INSERT INTO Orders SET ?";
    connection.query(sql, { userId }, function (error, results, fields) {
      if (error) rej(error);
      orderId = results.insertId;
      let values = products.map((item) => {
        return [orderId, item];
      });

      let sql2 = "INSERT INTO Order_Product (orderId,productId) VALUES  ?";
      connection.query(sql2, [values], function (err, results, fields) {
        if (err) rej(err);
        res(`orderId: ${orderId} -- Order was added to db `);
      });
    });
  });

const getProductByOrderIdDb = async (connection, orderId) =>
  new Promise((resolved, rejected) => {
    const sql = "SELECT productId FROM Order_Product  WHERE orderId = ?";
    connection.query(sql, orderId, (err, results) => {
      if (err) rejected(err);
      else resolved(results);
    });
  });

const getProductDetailByProductIdDb = async (connection, productId) =>
  new Promise((resolved, rejected) => {
    const sql = "SELECT detail FROM Product_Detail WHERE productId = ?";
    connection.query(sql, productId, (err, results) => {
      if (err) rejected(err);
      else resolved(results);
    });
  });

const getProductsDb = async (connection) =>
  new Promise((resolved, rejected) => {
    connection.query("SELECT * FROM Products ", (err, rows) => {
      if (!err) resolved(rows);
      else rejected(err);
    });
  });

const updateProductDb = async (connection, body) =>
  new Promise((resolved, rejected) => {
    const { name, id } = body;
    connection.query(
      "UPDATE Products SET name = ? WHERE productId =  ? ",
      [name, id],
      (err, result) => {
        if (!err) resolved(`productId  ${id} was update`);
        else rejected(err);
      }
    );
  });
