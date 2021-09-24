const express = require ('express');
const colors = require ('colors');
const router = require ('./routes/router.js')

const app = express();

// app.get("/productos", (req,res)=>{
//     console.log("productos")

// });

// app.get("/productos/:id", (req,res)=>{
//     console.log("productos")

// });

// app.post("/productos", (req,res)=>{
//     console.log("productos")

// });

// app.put("/productos/:id", (req,res)=>{
//     console.log("productos")

// });

// app.delete("/productos/:id", (req,res)=>{
//     console.log("productos")

// });

app.use("/api", router);

app.listen(8080, ()=>{
    console.log("Server on port 8080".green)
});

