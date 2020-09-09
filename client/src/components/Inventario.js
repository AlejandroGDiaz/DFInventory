import React from "react";
import {reduxForm} from "redux-form"
import FormInventario from "./forms/FormInventario";
import InventarioView from "./forms/InventarioView";

class Inventario extends React.Component{

    state = {showInventario: false}

    renderContent(){
        if(this.state.showInventario){
            return <InventarioView onCancel={() => this.setState({showInventario:false})}/>
        }

        return <FormInventario onFormInventarioSubmit={() => this.setState({showInventario:true})}/>
        
    }

    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm({
    form: "inventarioForm"
})(Inventario);