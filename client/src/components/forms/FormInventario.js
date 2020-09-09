import React from "react";
import {reduxForm, Field} from "redux-form";
import {Link} from "react-router-dom";
import OptionsField from "./OptionsField";

class FormInventario extends React.Component{

    renderFields(){

         return <Field label="Sucursal" name="sucursal" component={OptionsField} />
        
    }

    render(){
        return(
            <div className="ui container" style={{marginTop: "20px"}}>
                <h2 className="ui dividing header">Material en Stock</h2>
                <form onSubmit={this.props.handleSubmit(this.props.onFormInventarioSubmit)} className="ui form">
                    {this.renderFields()}
                    <Link className="ui button left floated labeled icon" to="/" style={{marginTop:"15px"}}><i className="angle left icon"></i>Regresar</Link>
                    <button className="ui button right floated green labeled icon" style={{marginTop:"15px"}} type="submit"><i className="angle right icon"></i>Buscar</button>    
                </form>
            </div>
        )
    }
}

function validate(values){
    const errors = {}

    if(!values.sucursal){
        errors.sucursal="Debes seleccionar una sucursal"
    }

    return errors;
}

export default reduxForm({
    validate,
    form: "inventarioForm",
    destroyOnUnmount: false
})(FormInventario);