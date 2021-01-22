import React from "react";
import {reduxForm, Field} from "redux-form";
import {Link} from "react-router-dom";

import TextField from "./TextField";
import CodigoDataList from "../CodigoDataList";


class FormAlta extends React.Component{

    renderFields(){
        return(
            <div>
                <Field label="Modelo" type="text" name="codigo" component={TextField} list="codigo"/>
                <CodigoDataList id="codigo"/>
                
                <Field label="Cantidad" type="text" name="cantidad" component={TextField} />
            </div>
        )
    }

    render(){
        return(
            
            <div className="ui container" style={{marginTop:"20px"}}>
                <h2 className="ui dividing header">Llenado para ingreso de material</h2>
                <form onSubmit={this.props.handleSubmit(this.props.onFormAltaSubmit)} className="ui form">
                    {this.renderFields()}
                    <Link 
                        className="ui button left floated labeled icon" 
                        to="/" 
                        style={{marginTop:"15px"}}>
                            <i className="angle left icon"></i>
                            Regresar
                    </Link>
                    <button 
                        className="ui button right floated green labeled icon" 
                        style={{marginTop:"15px"}} 
                        type="submit">
                            <i className="angle right icon"></i>
                            Siguiente
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.codigo){
        errors.codigo = "Debes de ingresar un modelo"
    }

    if(!values.cantidad){
        errors.cantidad = "Debes ingresar una cantidad"
    }else if(isNaN(Number(values.cantidad))){
        errors.cantidad = "El valor debe ser un número"
    }else if(Number(values.cantidad) <=0){
        errors.cantidad = "La cantidad debe ser mayor a 0"
    }


    return errors
}

export default reduxForm({
    validate,
    form: "formAlta",
    destroyOnUnmount: false
})(FormAlta);