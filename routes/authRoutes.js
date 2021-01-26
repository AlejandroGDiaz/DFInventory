const jwt = require("jsonwebtoken");

const keys = require("../config/keys");

const User = require("../models/User");

const checkLogin = require("../middleware/auth/checkLogin")

module.exports = app => {
    app.post("/api/login", async (req, res) => {

        const {email, contrasena} = req.body;
        
        const user = await User.findOne({email, contrasena});

        //Si existe el usuario, se crea el token con su info
        if(user){
            const token = jwt.sign({user:{
                nombre: user.nombre,
                sucursal: user.sucursal,
                permisos: user.permisos
            }}, keys.secretJWT,{expiresIn:"10h"})
        
        //Se crea una cookie con el token del usuario
            req.session = {
                userJWT: token
            }
        
        //Se envía al cliente la info del usuario
            res.status(200).send({
                nombre: user.nombre,
                sucursal: user.sucursal,
                permisos: user.permisos
            })
        }
        else{
            res.send("")
        }
    })

    app.get("/api/current_user", checkLogin, (req, res) => {
        res.send(req.user)
    })    

    app.get("/api/logout", (req, res) => {
        req.session = null;
        res.status(200).send({
            mensaje:"Salida exitosa"
        })

    })
}