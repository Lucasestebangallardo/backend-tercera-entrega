 const express= require('express');
/* const fs = require('fs'); */
const ProductManager = require('./ProductManager');
const app= express();




 app.get('/',(require,res)=>{
    res.send("este es mi servidor")
})

const pm = new ProductManager("./products.json");
app.get('/products/?', async (require, res) => {
  const resultado = await pm.getProducts()
    res.send(resultado);
  });

  app.get("/products/?", async (req, res) => {
    const products = await pm.getProducts();
    const limit = req.query.limit;
    const newProducts = products.products.slice(0, limit);
    res.send(newProducts);
  });
  
  app.get("/products/:id", async (req, res) => {
    const productId = await pm.getProductById(req.params.id);
    productId ? res.send(productId) : res.send({error: "not found"});
  });
  

app.listen(8080,()=> {
    console.log("Listening on 8080");
}) 
 




