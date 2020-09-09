import React from "react";

export default ({input, label, meta:{error, touched}, list}) => {
    return(
        <div className="field">
            <label>{label}</label>
            <input {...input} list={list}/>
            <div style={{marginTop:"10px"}}>
                {touched && error}
            </div>
        </div>
    )
}