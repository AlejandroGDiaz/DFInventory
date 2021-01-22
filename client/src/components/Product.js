import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import {Link} from "react-router-dom";

class Product extends React.Component{

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.codigo);
        
    };

    renderOrdendes(){
        if(this.props.product.ordenes){
        let arrayOrdenes = new Array(this.props.product.orden_details)
        return (
            arrayOrdenes[0].map((orden, index) => {
                return <div key={index}>
                    <p style={{fontSize:"18px", textAlign:"left"}}>{orden.numeroDeCotizacion}</p>
                </div>
            })
        )} else{
            return <div>Cargando</div>
        }
    }

    renderProduct(){
        const {codigo, descripcion, cantidadMXLI, cantidadQRO} = this.props.product;
        return(
            <div className="ui centered card" style={{marginTop:"20px"}}>
                <div className="content">
                    <h2 className="header">{codigo}</h2>
                </div>
                <div className="content">
                    <div className="description">
                        <p style={{fontSize:"18px", textAlign:"left"}}>
                            <b>Descripción:</b> {descripcion}
                        </p>
                    </div>
                    <br/>
                    <div className="description">
                        <p style={{fontSize:"18px", textAlign:"left"}}>
                            <b>Cantidad en Mexicali:</b> {cantidadMXLI}
                        </p>
                        <p style={{fontSize:"18px", textAlign:"left"}}>
                            <b>Cantidad en Querétaro:</b> {cantidadQRO}
                        </p>
                    </div>
                    <br/>
                    <div className="description">
                        <p style={{fontSize:"18px", textAlign:"left"}}>
                            <b>Órdenes de compra activas:</b>
                        </p>
                        {this.renderOrdendes()}
                        
                    </div>
                </div>
            </div>
        );
    }

    render(){
        return(
            <div style={{textAlign:"center"}}>
                <Link 
                    className="ui centered button" 
                    to="/producto"
                    style={{marginTop:"15px"}} 
                >Regresar
                </Link>
                {this.renderProduct()}                
            </div>
               
        );
    }
}

function mapStateToProps({product}){
    return {product}
}

export default connect(mapStateToProps, actions)(Product);