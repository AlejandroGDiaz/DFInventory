import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
    return(
    <div className="ui container" style={{marginTop:"20px", textAlign:"center"}}>
        <h1>Operación Exitosa</h1>
        <div>
            <p style={{fontSize:"20px"}}>
                La operación fue realizada con éxito. Presiona el botón para realizar una nueva
            </p>
        </div>
        <Link className="ui button centered" style={{marginTop:"20px"}} to="/">Menú</Link>
    </div>
    )
}

export default Success;