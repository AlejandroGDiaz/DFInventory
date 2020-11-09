const mongoose = require("mongoose");
const _ = require("lodash");
const moment = require("moment");

const Product = require("../models/Product");
const Register = require("../models/Register");
const Order = require("../models/Order");

const discrepanciasOrden = require("../utils/checkDiscrepanciasOrden")
const discrepanciasProducto = require("../utils/checkDiscrepanciasProducto")

module.exports = app => {

    app.get("/api/productos", async (req, res) => {
        try{
            const result = await Product.find({}, "codigo")
            res.send(result)

        }
        catch{
            res.send("")
        }
    })

    app.post("/api/product", async (req, res) =>{
        try{
          const {codigo} = req.body;

          const product = await Product.findOne({codigo: _.toUpper(codigo)}).populate({
            path: "orden_details",
            select: "numeroDeCotizacion",
            match:{completada:false}
          })

          res.send(product);  
        }
        catch{
            res.send("")
        }
    });

    app.post("/api/product/alta", (req, res) => {
        let { codigo, sucursal, cantidad} = req.body;
        
        if(sucursal == "Mexicali"){
            Product.findOneAndUpdate({codigo: _.toUpper(codigo)},
                {
                    $inc:{cantidadMXLI:parseInt(cantidad)}
                }, (err, result) => {
                    res.send(result)
                });
        }else if (sucursal == "Queretaro"){
            Product.findOneAndUpdate({codigo: _.toUpper(codigo)},
                {
                    $inc:{cantidadQRO:parseInt(cantidad)}
                }, (err, result) => {
                    res.send(result)
                });
        }
    });

    app.post("/api/product/baja", async (req, res) => {

        let {codigo, numeroDeCotizacion, sucursal, cantidad, contratista, responsable, responsableDF, obra} = req.body;

        try{

            const product = await Product.findOne({codigo:_.toUpper(codigo)})
            const orden = await Order.findOne({numeroDeCotizacion, articulos:{$elemMatch:{codigo}}}, "articulos")

            if(orden){

                if(discrepanciasProducto(product, parseInt(cantidad), sucursal) || discrepanciasOrden(orden, parseInt(cantidad), _.toUpper(codigo))){
                    res.send("")

                }
                else{
                    let cantidadDeFaltantes = 0;
                    orden.articulos.map(articulo => {
                        if(articulo.codigo==codigo){
                            articulo.cantidadEntregada += parseInt(cantidad)
                            articulo.cantidadFaltante -= parseInt(cantidad)
                        }
                    })

                    orden.articulos.map(articulo => {
                        if(articulo.cantidadFaltante == 0){
                            cantidadDeFaltantes++
                        }
                    })

                    if(cantidadDeFaltantes == orden.articulos.length){
                        orden.completada = true
                    }

                    orden.save()

                    if(sucursal == "Mexicali"){
                        const result = await Product.findOneAndUpdate({codigo: _.toUpper(codigo)},
                        {
                            $inc:{
                                cantidadMXLI: -parseInt(cantidad)
                            }});
                        if(result){
                            const register = new Register({
                                codigo: _.toUpper(codigo),
                                numeroDeCotizacion,
                                sucursal: _.toUpper(sucursal),
                                cantidad: parseInt(cantidad),
                                contratista: _.toUpper(contratista),
                                responsable: _.toUpper(responsable),
                                responsableDF: _.toUpper(responsableDF),
                                obra: _.toUpper(obra),
                                fecha: moment().format("DD/MM/YYYY")
    
                            })
                            register.save();
                            res.send(result);  
                        }
                        else{
                            res.send("");
                        }
                
                    }
                    else if(sucursal == "Queretaro"){
                        const result = await Product.findOneAndUpdate({codigo: _.toUpper(codigo)},
                        {
                            $inc:{
                                cantidadQRO: -parseInt(cantidad)
                            }});
                        if(result){
                            const register = new Register({
                                codigo: _.toUpper(codigo),
                                numeroDeCotizacion,
                                sucursal: _.toUpper(sucursal),
                                cantidad: parseInt(cantidad),
                                contratista: _.toUpper(contratista),
                                responsable: _.toUpper(responsable),
                                responsableDF: _.toUpper(responsableDF),
                                obra: _.toUpper(obra),
                                fecha: moment().format("DD/MM/YYYY")
    
                            })
                            register.save();
                            res.send(result);  
                        }
                        else{
                            res.send("");
                        }
                    }

                }

            }
            else{
                res.status(404).send("");
            }
            
        }
        catch{
            res.send("");
        }

    });
}