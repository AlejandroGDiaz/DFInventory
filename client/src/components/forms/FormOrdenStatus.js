import React from "react";
import {reduxForm, Field} from "redux-form";
import {Link} from "react-router-dom";
import TextField from "./TextField";

class FormOrdenStatus extends React.Component{
    renderFields(){
        return <Field label="Numero de cotización" name="numeroDeCotizacion"  component={TextField} />
    }
    render(){
        return(
            <div className="ui container" style={{marginTop: "20px"}}>
                <h2 className="ui dividing header">Estado de Orden de Compra</h2>
                <form onSubmit={this.props.handleSubmit(this.props.onFormSubmit)} className="ui form">
                {this.renderFields()}
                    <Link 
                        className="ui button left floated labeled icon" 
                        to="/" 
                        style={{marginTop:"15px"}}
                        >
                        <i className="angle left icon"></i>
                        Regresar
                    </Link>
                    <button 
                        className="ui button right floated green labeled icon" 
                        style={{marginTop:"15px"}} 
                        type="submit"
                        >
                            <i className="angle right icon"></i>
                            Buscar
                    </button>    

                </form>
            </div>
        )
    }
}

function validate(values){
    const errors = {}

    if(!values.numeroDeCotizacion){
        errors.numeroDeCotizacion="Debes de ingresar un número de cotización"
    }

    return errors;
}

export default reduxForm({
    validate,
    form: "formOrdenStatus",
    destroyOnUnmount: false
})(FormOrdenStatus);