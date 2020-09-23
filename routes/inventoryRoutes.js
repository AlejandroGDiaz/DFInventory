const mongoose = require("mongoose");

const Product = require("../models/Product");

module.exports = app => {
    app.post("/api/inventario", async (req, res) => {
        try{
            const { sucursal } = req.body;

            if(sucursal=="Mexicali"){
                const result = await Product.find({cantidadMXLI: {$gt:0}}, "codigo descripcion cantidadMXLI")
                res.send(result)
            }
            else if (sucursal == "Queretaro"){
                const result = await Product.find({cantidadQRO: {$gt:0}}, "codigo descripcion cantidadQRO")
                res.send(result)
            }
            else if (sucursal == "Total"){
                const result = await Product.find(
                    {$or: [
                        {cantidadMXLI: {$gt:0}},
                        {cantidadQRO: {$gt:0}}
                    ]
                    })
                res.send(result)
            }
        }
        catch{
            res.send("");
        }
    })
}