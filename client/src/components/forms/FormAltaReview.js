import React,{useState} from "react";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const FormAltaReview = ({onCancel, altaValues, addMaterial, history}) => {

    const [disabled, setDisabled] = useState(false);

    return(
        <div className="ui container" style={{marginTop:"20px"}}>
            <h2 className="ui dividing header">Favor de confirmar que los datos sean correctos</h2>
            <div className="ui form">
                <div className="field" style={{fontSize:"20px"}}>
                    <label style={{marginBottom:"20px"}}>Modelo:</label> {altaValues.codigo}
                </div>
                <div className="field" style={{fontSize:"20px"}}>
                    <label style={{marginBottom:"20px"}}>Cantidad:</label> {altaValues.cantidad}
                </div>
            </div>
            <button 
                className="ui button left floated labeled icon" 
                style={{marginTop:"15px"}} onClick={onCancel}>
                    <i className="angle left icon"></i>
                    Regresar
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
                    addMaterial(altaValues, history)
                }}
            >{disabled?"Enviando...": "Confirmar"}
            </button>
            
        </div>
    )
}

function mapStateToProps(state){
    return {
        altaValues: state.form.formAlta.values
    };
}
export default connect(mapStateToProps, actions)(withRouter(FormAltaReview));