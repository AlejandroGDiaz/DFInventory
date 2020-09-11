import React from "react";
import {connect} from "react-redux";
import * as actions from "../../actions";

class InventarioView extends React.Component{

    componentDidMount(){
        this.props.fetchInventory(this.props.inventoryValues)
    }

    renderRows(){
        if(this.props.inventoryValues.sucursal==="Mexicali"){
            return this.props.inventario.map(product => {
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
            return this.props.inventario.map(product => {
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
                <table className="ui fixed table">
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

    render(){
        return(
            <div className="ui container" style={{marginTop:"20px"}}>
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