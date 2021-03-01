const mongoose = require("mongoose");
const _ = require("lodash");
const moment = require("moment");

const Order = require("../models/Order");
const Product = require("../models/Product");

const checkLogin = require("../middleware/auth/checkLogin");

module.exports = app => {
    app.post("/api/order/new", checkLogin, async (req, res) => {
        try{
            const {numeroDeCotizacion, obra, contratista, articulos} = req.body;
            const {nombre: responsableDF, permisos} = req.user;

            if(permisos.includes("admin")||permisos.includes("altaOrden"))
            {
                const oldOrder = await Order.findOne({numeroDeCotizacion});

                if(oldOrder){
                    res.send("")
                }
                else{

                let validateArticulosFlag = false 
                for(var i=0; i<articulos.length; i++){
                        const product = await Product.findOne({codigo:articulos[i].codigo})
                        if(!product){
                            validateArticulosFlag = true
                            break
                        }
                }//for(var i=0; i<articulos.length; i++)

                if(!validateArticulosFlag){
                const order = new Order({
                    numeroDeCotizacion: _.toUpper(numeroDeCotizacion),
                    obra: _.toUpper(obra),
                    contratista: _.toUpper(contratista),
                    responsableDF: _.toUpper(responsableDF),
                    fecha: moment().format("DD/MM/YYYY"),
                    articulos
                    })
                    order.save()
                    //grabar cotizacion en producto
                    articulos.map(async (articulo) => {
                        try{
                            const producto = await Product.findOne({codigo:articulo.codigo})
                            producto.ordenes.push({numeroDeCotizacion})
                            producto.save()
                        }
                        catch{
                            return
                        }
                    })
                    res.send(order)
                    }
                    else
                    {
                        res.send("");
                    } 

                }//else(oldOrder)

            }//if(permisos.includes("admin")||permisos.includes("altaOrden")
            else{
                res.send("");
            }    


        }//try
        catch{
            res.send("");
        }
    })

    app.post("/api/order/search", checkLogin, async (req, res) => {
        try{
            const {numeroDeCotizacion} = req.body;
            const result = await Order.findOne({numeroDeCotizacion}).populate("articulos_details");
            res.send(result);
        }
        catch{
            res.send("");
        }
    })

    app.get("/api/order/total", checkLogin, async (req, res) => {
        try{
            const products = await Product.find({ "ordenes.0": { "$exists": true }}).
            populate({
                path: "orden_details",
                select: "articulos"
            });

           let salida = products

           let result = products.map((product) => {
               return product.orden_details.map(orden => {
                   return orden.articulos.filter(articulo => articulo.codigo==product.codigo)     
               })
           })

           let articulos = []
           result.map( orden => orden.map(articulo => articulo.map(ar => articulos.push(ar))))

           var totalPerType = {};
           for (var i = 0, len = articulos.length; i < len; ++i) {
            totalPerType[articulos[i].codigo] = totalPerType[articulos[i].codigo] || 0;
            totalPerType[articulos[i].codigo] += articulos[i].cantidadFaltante;
           }

           var out = _.map(totalPerType, function (cantidadFaltante, codigo) {
            return {'codigo': codigo, 'cantidadFaltante': cantidadFaltante};
            });
            
           let response = []

            const sortedSalida = _.sortBy(salida, "codigo");
            const sortedOut = _.sortBy(out, "codigo");

            sortedSalida.map((articulo, index) => {
                if(articulo.codigo===sortedOut[index].codigo){
                    let temp = {
                        codigo: articulo.codigo,
                        descripcion: articulo.descripcion,
                        cantidadMXLI: articulo.cantidadMXLI,
                        cantidadQRO: articulo.cantidadQRO,
                        cantidadFaltante: sortedOut[index].cantidadFaltante
                    }
                    response.push(temp)
                }
            })
            
            const filteredResponse = response.filter(articulo => articulo.cantidadFaltante>0)
            
            res.send(filteredResponse)
        }
        catch{
            res.send("")
        }
    })

    app.get("/api/order/active", checkLogin, async(req, res) => {
        try{
            const order = await Order.find({}, "numeroDeCotizacion obra fecha contratista responsableDF completada")
            res.send(order)

        }catch{
            res.send("")
        }
    })
}