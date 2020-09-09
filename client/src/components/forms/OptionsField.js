import React from "react";

export default ({input, label, meta:{error, touched}}) => {
    return(
        <div className="field">
            <label>{label}</label>
            <select {...input} className="ui selection dropdown">
                <option value=""></option>
                <option value="Mexicali">Mexicali</option>
                <option value="Queretaro">Querétaro</option>
            </select>
            <div style={{marginTop:"10px"}}>
                {touched && error}
            </div>
        </div>
    )
}