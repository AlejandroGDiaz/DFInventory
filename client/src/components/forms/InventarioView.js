import React from "react";
import _ from "lodash";
import {connect} from "react-redux";
import * as actions from "../../actions";

import Print from "../print/Print";

class InventarioView extends React.Component{

    
    componentDidMount(){
        this.props.fetchInventory(this.props.inventoryValues)
    }
    
    //sortedInventory = _.sortBy(this.props.inventario, "codigo")
    title = this.props.inventoryValues.sucursal==="Mexicali" ? "Inventario en Mexicali" : "Inventario en Querétaro";


    renderRows(){
        const sortedInventory = _.sortBy(this.props.inventario, "codigo")
        if(this.props.inventoryValues.sucursal==="Mexicali"){
            return sortedInventory.map(product => {
                return(
                    <tr key={product._id}>
                        <td>{product.codigo}</td>
                        <td>{product.descripcion}</td>
                        <td>{product.cantidadMXLI}</td>
                    </tr>
                );
            })
        }
        else if (this.props.inventoryValues.sucursal==="Queretaro"){
            return sortedInventory.map(product => {
                return(
                    <tr key={product._id}>
                        <td>{product.codigo}</td>
                        <td>{product.descripcion}</td>
                        <td>{product.cantidadQRO}</td>
                    </tr>
                );
            })
        }
     }

    renderTable(){
        return(
            <div>
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Modelo</th>
                            <th>Descripción</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        );

    }

    getData(){
        const data = [];
        const sortedInventory = _.sortBy(this.props.inventario, "codigo") 
        sortedInventory.map(product => data.push(Object.values(product)))
        const slicedData = data.map(field => field.slice(1))
        return slicedData;
    }


    render(){

     

        return(
            <div className="ui container" style={{marginTop:"20px"}}>
                <h2 className="ui dividing header">{this.title}</h2>
                <Print 
                    title={this.title} 
                    headers={[["Modelo", "Descripción", "Cantidad"]]} 
                    data={this.getData()} 
                    className="ui button right floated"
                    style={{marginBottom:"20px"}}
                />
                {this.renderTable()}
                <button className="ui button left floated labeled icon" style={{marginTop:"15px"}} onClick={this.props.onCancel}><i className="angle left icon"></i>Regresar</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        inventoryValues: state.form.inventarioForm.values,
        inventario: state.inventory
    }
}

export default connect(mapStateToProps, actions)(InventarioView);