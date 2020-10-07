import React from "react";
import _ from "lodash";

import {reduxForm, Field, FieldArray} from "redux-form";
import {Link} from "react-router-dom";
import TextField from "./TextField";
import CodigoDataList from "../CodigoDataList";
//import normalizeNumberField from "../../utils/normalizeNumberField";

class FormOrden extends React.Component{

    renderArticulos({fields, meta:{error}}){
        return(
            <div>
                <div style={{textAlign:"center"}}>
                    <button 
                        type="button" 
                        onClick={() => fields.push()}
                        className="ui button labeled icon blue"
                    ><i className="plus icon"></i>
                            Agregar producto
                    </button>
                </div>
                {
                    fields.map((articulo, index) => {
                        return(
                        <div key={index} style={{marginTop:"20px"}}>
                            <Field 
                                label="Modelo" 
                                name={`${articulo}.codigo`} 
                                type="text" 
                                list="codigo" 
                                component={TextField}
                                parse={value => _.toUpper(value)}
                            />
                            <CodigoDataList id="codigo"/>
                            <Field 
                                label="Cantidad" 
                                name={`${articulo}.cantidad`} 
                                type="text" 
                                //normalize = {normalizeNumberField}
                                parse={value => isNaN(value)? value : Number(value)}  
                                component={TextField}
                            />
                            <Field 
                                name={`${articulo}.cantidadFaltante`} 
                                type="hidden" 
                                value={0} 
                                component="input"
                            />
                            <div style={{textAlign:"center"}}>
                                <button 
                                    type="button" 
                                    onClick={() => fields.remove(index)}
                                    className="ui button labeled icon red"
                                ><i className="trash icon"></i>
                                    Eliminar
                                </button>
                            </div>
                            <div style={{marginTop:"10px"}}>
                                {error}
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        )
    }

    renderFields(){
        return(
            <div>
                <Field label="Numero de cotización" type="text" name="numeroDeCotizacion" component={TextField}/>
                <Field label="Obra" type="text" name="obra" component={TextField}/>
                <Field label="Contratista/Cliente" type="text" name="contratista" component={TextField}/>
                <Field label="Responsable de Digital Fire" type="text" name="responsableDF" component={TextField}/>
                <FieldArray name="articulos" component={this.renderArticulos}/>
            </div>
        )
    }
    render(){
        return(
            <div className="ui container" style={{marginTop:"20px"}}>
                <h2 className="ui dividing header">Llenado para Orden de Compra</h2>
                <form onSubmit={this.props.handleSubmit(this.props.onFormOrdenSubmit)} className="ui form">
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

    if(!values.numeroDeCotizacion){
        errors.numeroDeCotizacion = "Debes de ingresar un número de cotización"
    }

    if(!values.obra){
        errors.obra = "Debes de ingresar una obra"
    }

    if(!values.contratista){
        errors.contratista = "Debes de ingresar un contratista o cliente"
    }

    if(!values.responsableDF){
        errors.responsableDF = "Debes de ingresar un responsable de Digital Fire"
    }

    if(!values.articulos || !values.articulos.length){
        errors.articulos = { _error: 'At least one member must be entered' }
    }
    else{
        const articulosArrayErrors = []
        values.articulos.forEach((articulo, index) => {
            const articulosErrors = {}
            if(!articulo || !articulo.codigo){
                articulosErrors.codigo = "Se necesita ingresar un modelo"
                articulosArrayErrors[index] = articulosErrors
            }
            if(!articulo ||!articulo.cantidad){
                articulosErrors.cantidad = "Se necesita ingresar una cantidad"
                articulosArrayErrors[index] = articulosErrors
            }else if(!articulo || isNaN(articulo.cantidad)){
                articulosErrors.cantidad = "Se necesita ingresar un número"
                articulosArrayErrors[index] = articulosErrors
            }else if(!articulo || (articulo.cantidad) <=0){
                articulosErrors.cantidad = "Se necesita ingresar un número mayor a 0"
                articulosArrayErrors[index] = articulosErrors
            }
            return articulosErrors
        })
        if(articulosArrayErrors.length){
            errors.articulos = articulosArrayErrors
        }
    }



    return errors;
}

export default reduxForm({
    validate,
    form: "formOrden",
    destroyOnUnmount: false
})(FormOrden);