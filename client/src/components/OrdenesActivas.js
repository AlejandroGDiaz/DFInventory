import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import * as actions from "../actions";

import Restricted from "./auth/Restricted";

class OrdenesActivas extends React.Component{

    state = {
        ordenes: []
    }

    componentDidMount(){
        this.props.fetchOrdenesActivas()
    }

    renderRows(){
        console.log(this.state.ordenes)
        return(
            this.state.ordenes.map(orden => {
                return(
                    <tr key={orden.numeroDeCotizacion}>
                        <td>{orden.fecha}</td>
                        <td>{orden.numeroDeCotizacion}</td>
                        <td>{orden.obra}</td>
                        <td>{orden.contratista}</td>
                        <td>{orden.responsableDF}</td>
                        <td className={orden.completada?"icon checkmark positive":"icon close negative"}>{orden.completada?"Completada":"Incompleta"}</td>
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
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderTable(){
        if(this.state.ordenes.length){
            return this.renderContent()
        }else{
            return (
                <div className="ui container" style={{textAlign:"center"}}>
                    <h3>Presiona un botón</h3>
                </div>
            )
        }
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
                    <button className="ui button right floated" onClick={() => this.setState({ordenes:this.props.ordenes})}>Todas</button>
                    <button className="ui button green right floated" onClick={() => {
                        let ordenesCompletas = this.props.ordenes.filter(orden => orden.completada === true)
                        this.setState({ordenes:ordenesCompletas})
                        }}>Completas</button>
                    <button className="ui button red right floated" onClick={() => {
                        let ordenesIncompletas = this.props.ordenes.filter(orden => orden.completada === false)
                        this.setState({ordenes:ordenesIncompletas})
                        }}>Incompletas</button>    
                    {this.renderTable()}
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