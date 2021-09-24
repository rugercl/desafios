const express = require ('express');
const {Router} = express;
const fs = require ('fs');
const Contenedor = require ('../contenedor.js')

const router = new Router();

let prod = fs.readFileSync("./routes/productos.txt", "utf-8");

let datos = new Contenedor(JSON.parse(prod));

// let datos = JSON.parse(prod);
router.get("/productos", (req,res)=>{
    const readProduct = async () => {
        try {
            let prod = await datos.getAll()
            res.send(prod)
          if (prod) {
            console.log("result OK");
          } else {
            throw "Error al ejecutar";
          }
        } catch (err) {
          throw err;
        }
      };
      
        readProduct();

});

router.get("/productos/:id", (req,res)=>{
   id = req.params.id;
    const readRandom = async () => {
        try {
           let prod = await datos.getById(id);
            res.send(prod)
          if (prod) {
            console.log("result OK");
          } else {
            throw "Error al ejecutar";
          }
        } catch (err) {
          throw err;
        }
      };
      
      readRandom();

});

// app.post("/productos", (req,res)=>{
//     console.log("productos")

// });

// app.put("/productos/:id", (req,res)=>{
//     console.log("productos")

// });

// app.delete("/productos/:id", (req,res)=>{
//     console.log("productos")

// });

module.exports = router;