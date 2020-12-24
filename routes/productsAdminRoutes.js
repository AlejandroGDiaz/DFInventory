
const Product = require("../models/Product")

module.exports = app => {

    app.post("/api/nuevoproducto", async (req, res) => {
        try{
            const {codigo, descripcion, cantidadMXLI, cantidadQRO} = req.body;

            const product = new Product({
                codigo,
                descripcion,
                cantidadMXLI,
                cantidadQRO
            })
            product.save()

            res.status(200).send('Nuevo producto creado' + codigo)
        }
        catch{
            res.status(400)
        }
        

    })

}