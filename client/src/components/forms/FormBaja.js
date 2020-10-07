import React from "react";
import {reduxForm, Field} from "redux-form";
import {Link} from "react-router-dom";
import TextField from "./TextField";
import OptionsField from "./OptionsField";
import CodigoDataList from "../CodigoDataList";


class FormBaja extends React.Component{

    renderFields(){
        return(
            <div>
                <Field label="Modelo" type="text" name="codigo" component={TextField} list="codigo"/>
                <CodigoDataList id="codigo"/>
                <Field label="Número de cotización" name="numeroDeCotizacion" component={TextField}/>
                <Field label="Sucursal" name="sucursal" component={OptionsField}/>
                <Field label="Cantidad" type="text" name="cantidad" component={TextField} />
                <Field label="Contratista" type="text" name="contratista" component={TextField} />
                <Field label="Responsable" type="text" name="responsable" component={TextField} />
                <Field label="Responsable de Digital Fire" type="text" name="responsableDF" component={TextField} />
                <Field label="Obra" type="text" name="obra" component={TextField} />
            </div>
        )
    }


    render(){
        return(
            <div className="ui container" style={{marginTop:"20px"}}>
                <h2 className="ui dividing header">Llenado para retiro de material</h2>
                <form onSubmit={this.props.handleSubmit(this.props.onFormBajaSubmit)} className="ui form">
                    {this.renderFields()}
                    <Link 
                        className="ui button left floated labeled icon" 
                        to="/" 
                        style={{marginTop:"15px"}}>
                            <i className="angle left icon"></i>Regresar
                    </Link>
                    <button 
                        className="ui button right floated green labeled icon" 
                        style={{marginTop:"15px"}} 
                        type="submit"
                    ><i className="angle right icon"></i>Siguiente
                    </button>
                </form>
            </div>
        )
    }
}

function validate(values){
    const errors = {}

    if(!values.codigo){
        errors.codigo = "Debes de ingresar un modelo"
    }

    if(!values.numeroDeCotizacion){
        errors.numeroDeCotizacion = "Debes seleccionar un número de cotización"
    }

    if(!values.cantidad){
        errors.cantidad = "Debes ingresar una cantidad"
    }else if(isNaN(Number(values.cantidad))){
        errors.cantidad = "El valor debe ser un número"
    }else if(Number(values.cantidad) <=0){
        errors.cantidad = "La cantidad debe ser mayor a 0"
    }

    if(!values.sucursal){
        errors.sucursal = "Debes seleccionar una sucursal"
    }

    if(!values.contratista){
        errors.contratista = "Debes ingresar un contratista"
    }

    if(!values.responsable){
        errors.responsable = "Debes ingresar un responsable"
    }

    if(!values.responsableDF){
        errors.responsableDF = "Debes ingresar un responsable de Digital Fire"
    }

    if(!values.obra){
        errors.obra = "Debes ingresar una obra"
    }


    return errors;
}

export default reduxForm({
    validate,
    form: "formBaja",
    destroyOnUnmount: false
})(FormBaja);