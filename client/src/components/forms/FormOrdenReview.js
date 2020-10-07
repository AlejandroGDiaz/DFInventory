import React from "react";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const FormOrdenReview = ({onCancel, orderValues, addOrder, history}) => {

    const hasDuplicates = () => {
        let valuesSoFar = Object.create(null);
        for (let i = 0; i<orderValues.articulos.length; ++i){
            let value = orderValues.articulos[i].codigo;
            if(value in valuesSoFar){
                return true
            }
            valuesSoFar[value] = true
        }
        return false 
    }

    const sendValues = () => {
        if(hasDuplicates()){
            return onCancel
        }
        else{
            return addOrder(orderValues, history)
        }
    }

    const renderArticulos = () => {
        return(
            orderValues.articulos.map((articulo, index) => {
               return(
                    <tr key={articulo.codigo}>
                        <td>{index+1}</td>
                        <td>{articulo.codigo}</td>
                        <td>{articulo.cantidad}</td>
                        <td>{articulo.cantidadFaltante = articulo.cantidad}</td>
                    </tr>
               ) 
            })
        )
    }

        return(
            <div className="ui container" style={{marginTop:"20px"}}>
                <h2 className="ui dividing header">Favor de confirmar que los datos sean correctos</h2>
                <div className="ui form">
                    <div className="field" style={{fontSize:"20px"}}>
                        <label 
                            style={{marginBottom:"20px"}}
                            >Numero de cotización:
                        </label> 
                        {orderValues.numeroDeCotizacion}
                    </div>
                    <div className="field" style={{fontSize:"20px"}}>
                        <label 
                            style={{marginBottom:"20px"}}
                            >Obra:
                        </label> 
                        {orderValues.obra}
                    </div>
                    <div className="field" style={{fontSize:"20px"}}>
                        <label 
                            style={{marginBottom:"20px"}}
                            >Contratista/cliente:
                        </label> 
                        {orderValues.contratista}
                    </div>
                    <div className="field" style={{fontSize:"20px"}}>
                        <label 
                            style={{marginBottom:"20px"}}
                            >Responsable de Digital Fire:
                        </label> 
                        {orderValues.responsableDF}
                    </div>
                    <div className="field" style={{fontSize:"20px"}}>
                        <label 
                            style={{marginBottom:"20px"}}
                            >Artículos:
                        </label> 
                        <table className="ui very basic collapsing celled table">
                            <thead>
                                <tr>
                                    <th>Número</th>
                                    <th>Modelo</th>
                                    <th>Cantidad</th>
                                    <th>Cantidad por entregar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderArticulos()}
                            </tbody>
                        </table>
                    </div>
                </div>
                <button 
                    className="ui button left floated labeled icon" 
                    style={{marginTop:"15px"}} 
                    onClick={onCancel}
                >
                    <i className="angle left icon"></i>Regresar
                </button>
                <button 
                    className="ui button right floated red" 
                    style={{marginTop:"15px"}} 
                    onClick={()=>sendValues()}
                 >Confirmar
                </button>
            </div>
        )
    
}

function mapStateToProps(state){
    return(
        {
            orderValues: state.form.formOrden.values
        }
    )
}

export default connect(mapStateToProps, actions)(withRouter(FormOrdenReview));