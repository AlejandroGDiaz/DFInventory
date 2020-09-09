const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const productSchema = new Schema ({
    codigo: String,
    descripcion: String,
    cantidadMXLI: Number,
    cantidadQRO: Number
});

module.exports = mongoose.model("products", productSchema);