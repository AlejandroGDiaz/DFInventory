import React from "react";

export default ({input, label, meta:{error, touched}}) => {
    return(
        <div className="field">
            <label>{label}</label>
            <select {...input} className = "ui selection dropdown">
                <option value=""></option>
                <option value="codigo">Modelo</option>
                <option value="sucursal">Sucursal</option>
                <option value="contratista">Contratista</option>
                <option value="responsable">Responsable</option>
                <option value="responsableDF">Responsable de Digital Fire</option>
                <option value="obra">Obra</option>
                <option value="fecha">Fecha</option>
            </select>
            <div style={{marginTop:"10px"}}>
                {touched && error}
            </div>
        </div>
    )
}