import React from "react";
import {reduxForm, Field} from "redux-form";
import {Link} from "react-router-dom";
import TextField from "./TextField";
import OptionsRegisterField from "./OptionsRegisterField";

class FormRegister extends React.Component{

    renderContent(){
        return(
        <div>
            <Field label="Criterio" name="criterio" component={OptionsRegisterField}/>
            <Field label="Valor" name="valor" type="text" component={TextField} />
        </div>
        )
    }

    render(){
        return(
            <div className="ui container" style={{marginTop:"20px"}}>
                <h2 className="ui division header">Llenado para la búsqueda de un registro</h2>
                <form onSubmit={this.props.handleSubmit(this.props.onFormRegisterSubmit)} className="ui form">
                    {this.renderContent()}
                    <Link className="ui button left floated labeled icon" to="/" style={{marginTop:"15px"}}><i className="angle left icon"></i>Regresar</Link>
                    <button className="ui button right floated green labeled icon" style={{marginTop:"15px"}} type="submit"><i className="angle right icon"></i>Siguiente</button>
                </form>
            </div>
        )
    }
}

function validate(values){
    const errors = {}

    if(!values.criterio){
        errors.criterio= "Debes elegir un criterio"
    }

    if(!values.valor){
        errors.valor = "Debes elegir un valor"
    }

    return errors;
}

export default reduxForm({
    validate,
    form: "formRegister",
    destroyOnUnmount: false
})(FormRegister);