import React from "react";
import { Link } from "react-router-dom";

const Failure = () => {
    return(
        <div className="ui container" style={{marginTop:"20px", textAlign:"center"}}>
        <h1>Algo salió mal</h1>
        <div>
            <p style={{fontSize:"20px"}}>
                El modelo no fue encontrado en la base de datos. Favor de realizar la operación de nuevo
            </p>
        </div>
        <Link className="ui button centered" style={{marginTop:"20px"}} to="/">Menú</Link>
    </div>
    )
}

export default Failure;