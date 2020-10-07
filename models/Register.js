const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const registerSchema = new Schema ({
    codigo: String,
    numeroDeCotizacion: String,
    sucursal: String,
    cantidad: Number,
    contratista: String,
    responsable: String,
    responsableDF: String,
    obra: String,
    fecha: String
});

module.exports = mongoose.model("registers", registerSchema);