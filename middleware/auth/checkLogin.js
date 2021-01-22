const jwt = require("jsonwebtoken");

const keys = require("../../config/keys");

module.exports = (req, res, next) => {

    //Si hay un token, se guarda la info del usuario en req.user
    if(req.session.userJWT){
        const user = jwt.verify(req.session.userJWT, keys.secretJWT)
        req.user = user.user;
        next()
    }else{
        res.send("")
    }

}