import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import Mensaje from "../utils/Mensaje";

import * as actions from "../actions";
import Restricted from "./auth/Restricted";

class CantidadesTotales extends React.Component{

    state = {
        hover:false
    }

    componentDidMount(){
        this.props.fetchTotales()
    }
    
    renderOrdenes = (codigo) =>{
        return(
            <Mensaje 
                codigo={codigo}
            />
        )
    }

    renderRows(){
        return(
            this.props.total.map(articulo =>{
                return(
                    <tr key={articulo.codigo}>
                        <td>{articulo.codigo}</td> 
                        <td>{articulo.descripcion}</td> 
                        <td>{articulo.cantidadMXLI}</td>
                        <td>{articulo.cantidadQRO}</td>
                        <td>{articulo.cantidadFaltante}</td>
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
                        <th>Modelo</th>
                        <th>Descripción</th>
                        <th>Cantidad en Mexicali</th>
                        <th>Cantidad en Querétaro</th>
                        <th>Cantidad total por entregar</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>

        )
    }

    render(){
        if(this.props.user.permisos.includes("admin")||this.props.user.permisos.includes("totalFaltantes")){
            return(
                <div className="ui container" style={{marginTop:"20px"}}>
                    <h2 className="ui dividing header">Total de cantidades faltantes</h2>
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
            return <Restricted/>
        }
        
    }
}

function mapStateToProps (state) {
    return({
        total: state.total,
        user: state.user
    })
}

export default connect(mapStateToProps, actions)(CantidadesTotales);