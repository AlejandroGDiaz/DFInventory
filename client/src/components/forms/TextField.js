import React from "react";

export default ({input, label, type, meta:{error, touched}, list}) => {
    return(
        <div className="field">
            <label>{label}</label>
            <input {...input} type={type} list={list}/>
            <div style={{marginTop:"10px"}}>
                {touched && error}
            </div>
        </div>
    )
}