import React from "react";
//import _ from "lodash";
import {connect} from "react-redux";
import * as actions from "../../actions";

class OrdenStatusView extends React.Component{

    componentDidMount(){
        this.props.fetchOrder(this.props.orderValue)
    }

    renderRows(){
        let articulosArrays = new Array (this.props.order.articulos) 
        let articulosArrDetails = new Array (this.props.order.articulos_details) 

        if(this.props.order.articulos){
             return articulosArrays[0].map((articulo, index) => {
            return (
                <tr key={index}>
                    <td>{articulo.codigo}</td>
                    <td>{articulosArrDetails[0][index].descripcion}</td>
                    <td>{articulo.cantidad}</td>
                    <td>{articulosArrDetails[0][index].cantidadMXLI}</td>
                    <td>{articulosArrDetails[0][index].cantidadQRO}</td>
                    <td>{articulo.cantidadEntregada}</td>
                    <td>{articulo.cantidadFaltante}</td>
                </tr>
                )
            })
        }
        else{
            return <tr><td>cargando</td></tr>
        }
        
    }

    renderHeaders(){
        return(
            <div>
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Obra</th>
                            <th>Contratista/Cliente</th>
                            <th>Responsable de Digital Fire</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.order.obra}</td>
                            <td>{this.props.order.contratista}</td>
                            <td>{this.props.order.responsableDF}</td>
                            <td>{this.props.order.fecha}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    renderTable(){
        return(
            <table className="ui celled table">
                <thead>
                        <tr>
                            <th>Modelo</th>
                            <th>Descripcion</th>
                            <th>Cantidad a entregar</th>
                            <th>Cantidad en Mexicali</th>
                            <th>Cantidad en Querétaro</th>
                            <th>Cantidad entregada</th>
                            <th>Cantidad faltante</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                
            </table>
        )
    }

    render(){
        return(
            <div className="ui container" style={{marginTop:"20px"}}>
                <h2 className="ui dividing header">Estado de Orden de Compra {this.props.order.numeroDeCotizacion}</h2>
                <button 
                    className="ui button left floated labeled icon" 
                    style={{marginBottom:"20px"}} onClick={this.props.onCancel}>
                        <i className="angle left icon"></i>
                        Regresar
                </button>
                {this.renderHeaders()}
                {this.renderTable()} 
            </div>
           
        )
    }
}

function mapStateToProps(state){
    return {
        orderValue: state.form.formOrdenStatus.values,
        order: state.order
    }
}

export default connect(mapStateToProps, actions)(OrdenStatusView);