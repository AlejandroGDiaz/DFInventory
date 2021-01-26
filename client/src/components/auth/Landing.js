import React from "react";
import {reduxForm, Field} from "redux-form";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";
import {connect} from "react-redux";
import TextField from "../forms/TextField";

const Landing = ({handleSubmit, history, logIn}) => {

    

    const renderFields = () => {
        return(
            <div>
                <Field label="Correo" type="text" name="email" component={TextField} />
                <Field label="Contraseña" type="password" name="contrasena" component={TextField} />
            </div>
        )
    }
    return(
        <div className="ui container" style={{marginTop:"20px"}}>
            <h2 className="ui dividing header">Favor de identificarse</h2>
            <form onSubmit={handleSubmit((values) => {logIn(values, history)})} className="ui form">
                {renderFields()}
                <button 
                    className="ui button green labeled icon" 
                    style={{marginTop:"15px"}} 
                    type="submit"
                    >
                        <i className="angle right icon"></i>
                        Ingresar
                </button>
            </form>
        </div>
    )
}

const validate = (values) => {
    const errors = {}
    if(!values.email){
        errors.email = "Debes proporcionar un correo"
    }
    if(!values.contrasena){
        errors.contrasena = "Debes proporcionar una contraseña"
    }
    return errors
}

export default reduxForm({
    validate,
    form: "authForm"
})(connect(null, actions)(withRouter(Landing)))