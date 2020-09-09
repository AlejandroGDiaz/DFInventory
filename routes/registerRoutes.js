const mongoose = require("mongoose");
const _ = require("lodash");

const Register = require("../models/Register");

module.exports = app => {

    app.post("/api/register", async ( req, res) => {

        try{
            let { criterio, valor} = req.body;

            let query = {}

            if(criterio !== "" && valor !== ""){

                query[criterio] = _.toUpper(valor);
            }
            
            const result = await Register.find(query);

            if(!result){
                res.send("")
            }

            res.send(result);
        
        }
        catch{
            res.send("");

        }

    });

}