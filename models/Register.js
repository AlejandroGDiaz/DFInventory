const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const registerSchema = new Schema ({
    codigo: String,
    sucursal: String,
    cantidad: Number,
    contratista: String,
    responsable: String,
    obra: String,
    fecha: String
});

module.exports = mongoose.model("registers", registerSchema);