import React from "react";
import _ from "lodash";
import {connect} from "react-redux";
import * as actions from "../../actions";

class InventarioView extends React.Component{

    componentDidMount(){
        this.props.fetchInventory(this.props.inventoryValues)
    }

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
                <table className="ui collapsing table">
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

    renderTitle(){
        if(this.props.inventoryValues.sucursal==="Mexicali"){
            return <h2 className="ui dividing header">Inventario en Mexicali</h2>
        }
        return <h2 className="ui dividing header">Inventario en Querétaro</h2>
        
    }

    render(){
        return(
            <div className="ui container" style={{marginTop:"20px"}}>
                {this.renderTitle()}
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