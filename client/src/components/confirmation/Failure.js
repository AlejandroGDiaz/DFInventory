import React from "react";
import { Link } from "react-router-dom";

const Failure = () => {
    return(
        <div className="ui container" style={{marginTop:"20px", textAlign:"center"}}>
            <div className="ui negative message">
                <h1>¡Algo salió mal!</h1>
            </div>
            <div>
                <p style={{fontSize:"20px"}}>
                    El error puede estar asociado a:
                    <ol className="ui list">
                        <li>El modelo no se encontró al momento de dar de alta el material</li>
                        <li>El modelo no se encontró al momento de dar de baja el material</li>
                        <li>El número de cotización no existe o no ha sido dada de alta la oden de compra</li>
                        <li>Algún modelo no está dado de alta en la orden de compra ingresada</li>
                        <li>Existe una discrepancia entre la cantidad que se quiere dar de baja y la cantidad existente</li>
                        <li>Existe una discrepancia entre la cantidad que falta por entregar y la cantidad que se quiere dar de baja</li>
                    </ol>
                </p>
            </div>
        <Link className="ui button centered" style={{marginTop:"20px"}} to="/">Menú</Link>
    </div>
    )
}

export default Failure;