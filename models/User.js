const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema ({
    nombre: String,
    email: String,
    contrasena: String,
    sucursal: String,
    permisos:[String]
});

module.exports = mongoose.model("users", userSchema);