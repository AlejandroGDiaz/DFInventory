const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const orderSchema = new Schema ({
    numeroDeCotizacion: String,
    obra: String,
    contratista: String,
    responsableDF: String,
    fecha: String,
    completada:{
        type: Boolean,
        default: false
    },
    articulos:[{
        codigo:{
            type:String
        },
        cantidad: Number,
        cantidadEntregada:{
            type: Number, 
            default: 0
        },
        cantidadFaltante: Number
    }]
}, { toJSON: { virtuals: true }, toObject: { virtuals: true }});

orderSchema.virtual("articulos_details", {
    ref: "products",
    localField:"articulos.codigo",
    foreignField: "codigo"
});

module.exports = mongoose.model("orders", orderSchema);