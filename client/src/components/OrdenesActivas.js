import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import * as actions from "../actions";

import Restricted from "./auth/Restricted";

class OrdenesActivas extends React.Component{

    componentDidMount(){
        this.props.fetchOrdenesActivas()
    }

    renderRows(){
        return(
            this.props.ordenes.map(orden => {
                return(
                    <tr key={orden.numeroDeCotizacion}>
                        <td>{orden.fecha}</td>
                        <td>{orden.numeroDeCotizacion}</td>
                        <td>{orden.obra}</td>
                        <td>{orden.contratista}</td>
                        <td>{orden.responsableDF}</td>
                    </tr>
                )
            })
        )
    }

    renderContent(){
        return(
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Orden de compra</th>
                        <th>Obra</th>
                        <th>Contratista</th>
                        <th>Responsable de DF</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    render(){
        if(this.props.user.permisos.includes("admin")||this.props.user.permisos.includes("ordenesActivas")){
            return(
                <div className="ui container" style={{marginTop:"20px"}}>
                    <h2 className="ui dividing header">Órdenes de compra activas</h2>
                    <Link 
                        className="ui button left floated labeled icon" 
                        to="/" 
                        style={{marginBottom:"15px"}}>
                        <i className="angle left icon"></i>Regresar
                    </Link>
                    {this.renderContent()}
                </div>
            )
        }else{
            return <Restricted />
        }
        
    }
}

function mapStateToProps (state) {
    return({
         ordenes: state.ordenesActivas,
         user: state.user
    })
}
export default connect(mapStateToProps, actions)(OrdenesActivas);