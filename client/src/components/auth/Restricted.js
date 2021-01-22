import React from "react";
import {Link} from "react-router-dom";

const Restricted = () => {
    return (
        <div className="ui container">
            <div className="ui error message">
                <div className="header">
                    Acceso denegado
                </div>
                <p>
                    No tienes permiso para poder realizar acciones en este módulo
                </p>
            </div>
            <Link className="ui button centered" style={{marginTop:"20px"}} to="/">Menú</Link>
        </div>
    )
}

export default Restricted;