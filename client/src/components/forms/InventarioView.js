import React from "react";
import _ from "lodash";
import {connect} from "react-redux";
import * as actions from "../../actions";

import Print from "../print/Print";
import PrintCSV from "../print/PrintCSV";

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
        else if (this.props.inventoryValues.sucursal === "Total") {
            return sortedInventory.map(product => {
                return(
                    <tr key={product._id}>
                        <td>{product.codigo}</td>
                        <td>{product.descripcion}</td>
                        <td>{product.cantidadMXLI}</td>
                        <td>{product.cantidadQRO}</td>
                    </tr>
                );
            })
        }
     }

    renderTable(){
        if (this.props.inventoryValues.sucursal==="Total")
        {
          return(
              <div>
                  <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Modelo</th>
                            <th>Descripción</th>
                            <th>Cantidad en Mexicali</th>
                            <th>Cantidad en Querétaro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
              </div>
          )  
        } else {
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
        

    }

    getTitle(){
        if(this.props.inventoryValues.sucursal==="Total"){
            return "Inventario Total"
        }else if(this.props.inventoryValues.sucursal==="Mexicali"){
            return "Inventario en Mexicali"
        } else if(this.props.inventoryValues.sucursal==="Queretaro"){
            return "Inventario en Querétaro"
        }
    }

    getHeaders(){
        if(this.props.inventoryValues.sucursal==="Total"){
            return [["Modelo", "Descripción", "CantidadMXLI", "CantidadQRO"]]
        }else{
            return [["Modelo", "Descripción", "Cantidad"]]
        }
    }

    getData(){
        const data = [];
        const sortedInventory = _.sortBy(this.props.inventario, "codigo") 
        sortedInventory.map(product => data.push(Object.values(product)))
        const slicedData = data.map(field => field.slice(1))
        return slicedData;
    }

    getDataForCSV(){
        let headers = ["Modelo", "Descripción", "Cantidad"]
        if (this.props.inventoryValues.sucursal==="Total"){
            headers = ["Modelo", "Descripción", "CantidadMXLI", "CantidadQRO"]
        }
        const data = [];
        const sortedInventory = _.sortBy(this.props.inventario, "codigo") 
        sortedInventory.map(product => data.push(Object.values(product)))
        const slicedData = data.map(field => field.slice(1))
        slicedData.splice(0, 0, headers);
        return slicedData;
         
    }


    render(){
        return(
            <div className="ui container" style={{marginTop:"20px"}}>
                <h2 className="ui dividing header">{this.getTitle()}</h2>
                <button 
                    className="ui button left floated labeled icon" 
                    style={{marginBottom:"20px"}} onClick={this.props.onCancel}>
                        <i className="angle left icon"></i>
                        Regresar
                </button>
                <Print 
                    title={this.getTitle()} 
                    headers={this.getHeaders()} 
                    data={this.getData()} 
                    className="ui button right floated blue"
                    style={{marginBottom:"20px"}}
                />
                <PrintCSV 
                    data = {this.getDataForCSV()}
                    title = "Inventario.csv"
                    className = "ui button right floated green"
                />
                {this.renderTable()}
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