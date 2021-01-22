import React, {useState} from "react";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const FormBajaReview = ({onCancel, bajaValues, removeMaterial, history }) =>{

    const [disabled, setDisabled] = useState(false);

    return(
        <div className="ui container" style={{marginTop:"20px"}}>
            <h2 className="ui dividing header">Favor de confirmar que los datos sean correctos</h2>
            <div className="ui form">
                <div className="field" style={{fontSize:"20px"}}>
                    <label style={{marginBottom:"20px"}}>Modelo:</label> {bajaValues.codigo}
                </div>
                <div className="field" style={{fontSize:"20px"}}>
                    <label style={{marginBottom:"20px"}}>Numero de Cotización:</label> {bajaValues.numeroDeCotizacion}
                </div>
                
                <div className="field" style={{fontSize:"20px"}}>
                    <label style={{marginBottom:"20px"}}>Cantidad:</label> {bajaValues.cantidad}
                </div>
                <div className="field" style={{fontSize:"20px"}}>
                    <label style={{marginBottom:"20px"}}>Contratista:</label> {bajaValues.contratista}
                </div>
                <div className="field" style={{fontSize:"20px"}}>
                    <label style={{marginBottom:"20px"}}>Responsable:</label> {bajaValues.responsable}
                </div>
                
                <div className="field" style={{fontSize:"20px"}}>
                    <label style={{marginBottom:"20px"}}>Obra:</label> {bajaValues.obra}
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
                disabled={disabled} 
                onClick={()=>{
                    if(disabled){
                        return;
                    }
                    setDisabled(true)
                    removeMaterial(bajaValues, history)
                }}
                >{disabled?"Enviando...": "Confirmar"}
            </button>
        </div>
    )
}

function mapStateToProps(state){
    return {
        bajaValues: state.form.formBaja.values
    }
}

export default connect(mapStateToProps, actions)(withRouter(FormBajaReview));