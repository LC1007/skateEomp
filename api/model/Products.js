const db = require("../config");

class Products{
    // get all products
fetchProducts(req, res){
    const query =
      "SELECT skateID, skateboard, quantity, amount, category, prodUrl FROM skateboards";
  
    db.query(query, (err, results) => {
      if(err){
          res.json({
              status: res.statusCode,
              msg: "Something went wrong"
          })
      } else{
          res.json({
              status: res.statusCode,
              results
          })
      }
    });
  };
  
  // get single product
  fetchProduct(req, res){
    const query = `SELECT skateID, skateboard, quantity, amount, category, prodUrl 
       FROM skateboards
       WHERE skateID = ?`;
    const { skateID } = req.params;
  
    db.query(query, [skateID], (err, result) => {
      if (err) {
        res.json({
          status: res.statusCode,
          msg: "Something went wrong trying to fetch a product",
        });
      } else {
        res.json({
          status: res.statusCode,
          result,
        });
      }
    });
    
  };
  
  // create a product
  addProduct(req, res){
    const query = `INSERT INTO skateboards SET ?`;
    const data = req.body;
  
    db.query(query, [data], (err) => {
      if (err) {
        res.json({
          status: res.statusCode,
          msg: err.message,
        });
      } else {
        res.json({
          status: res.statusCode,
          msg: "Product has been successfully created",
        });
      }
    });
  };
  
  // update a product
  updateProduct(req, res){
    const query = `UPDATE skateboards 
       SET ?
       WHERE skateID = ?`;
    const data = req.body;
    const { skateID } = req.params;
  
    db.query(query, [data, skateID], (err) => {
      if (err) {
        res.json({
          status: res.statusCode,
          msg: `Something went wrong trying to update product. skateID: ${data.skateID}`,
        });
      } else {
        res.json({
          status: res.statusCode,
          msg: `Product has been successfully updated. skateID: ${skateID}`,
        });
      }
    });
  };
  
  // Sort functions
  
  // Feature products
  featureProds(req, res){
    const query = 
    `SELECT skateID, skateboard, quantity, amount, category, prodUrl
     FROM skateboards
     LIMIT 5`

     db.query(query, (err, results) =>{
      if(err){
        res.json({
          msg: "Something went wrong",
          err: err.message
        })
      } else{
        res.json({
          status: res.statusCode,
          results
        })
      }
     })
  }

  // Sort by product name
  sortProd(req, res){
    const query = `SELECT skateID, skateboard, quantity, amount, category, prodUrl
       FROM skateboards
       ORDER BY skateboard`;
  
    db.query(query, (err, results) => {
      if (err) {
        res.json({
          status: res.statusCode,
          msg: err.message,
        });
      } else {
        res.json({
          status: res.statusCode,
          results,
        });
      }
    });
  };
  
  // Sort by product price
  sortPrice(req, res){
    const query = `SELECT skateID, skateboard, quantity, amount, category, prodUrl
       FROM skateboards
       ORDER BY amount`;
  
    db.query(query, (err, results) => {
      if (err) {
        res.json({
          status: res.statusCode,
          msg: err.message,
        });
      } else {
        res.json({
          status: res.statusCode,
          results,
        });
      }
    });
  };

  probCategory(req, res){
    const query = `SELECT skateID, skateboard, quantity, amount, category, prodUrl 
    FROM skateboards
    WHERE category LIKE ?`

    const { category } = req.params

    db.query(query, ['%' + category + '%'], (err, results) =>{
        if (err) {
            res.json({
              status: res.statusCode,
              msg: err.message,
            });
          } else {
            res.json({
              status: res.statusCode,
              results,
            });
          }
    })
  }
  
  // testing
  showTrucks(req, res){
    const query = `SELECT skateID, skateboard, quantity, amount, category, prodUrl
       FROM skateboards
       WHERE category = 'trucks'`;
  
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        results,
      });
    });
  };
}



module.exports = Products
