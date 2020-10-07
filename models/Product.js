const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const productSchema = new Schema ({
    codigo: String,
    descripcion: String,
    cantidadMXLI: Number,
    cantidadQRO: Number,
    ordenes:[{numeroDeCotizacion: String}]
}, { toJSON: { virtuals: true }, toObject: { virtuals: true }});

productSchema.virtual("orden_details",{
    ref: "orders",
    localField: "ordenes.numeroDeCotizacion",
    foreignField: "numeroDeCotizacion"
})

module.exports = mongoose.model("products", productSchema);