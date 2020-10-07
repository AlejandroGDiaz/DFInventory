import React from "react";
import { Link } from "react-router-dom";

const Failure = () => {
    return(
        <div className="ui container" style={{marginTop:"20px", textAlign:"center"}}>
        <h1>Algo salió mal</h1>
        <div>
            <p style={{fontSize:"20px"}}>
                El error puede estar asociado a:
                <ol className="ui list">
                    <li>El modelo no se encontró al momento de dar de alta el material</li>
                    <li>El modelo no se encontró al momento de dar de baja el material</li>
                    <li>El número de cotización no existe o no ha sido dada de alta la oden de compra</li>
                </ol>
            </p>
        </div>
        <Link className="ui button centered" style={{marginTop:"20px"}} to="/">Menú</Link>
    </div>
    )
}

export default Failure;