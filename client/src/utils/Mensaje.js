import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions"

class Mensaje extends React.Component{

    componentDidMount(){
        this.props.fetchProduct(this.props.codigo)
    }

    renderOrdenes(){
        if(this.props.product.orden_details){
            //let ordenesArray = new Array(this.props.product.orden_details)
            //return this.props.product.orden_details.map(orden => {
                //return <div key={orden._id}>{orden.numeroDeCotizacion}{console.log(orden)}</div>
           // })
            return <div>{this.props.product.codigo}</div>
        }else{
            return <div>Cargando</div> 
        }
    }

    renderLista(){
        return(
            <div>
                {this.renderOrdenes()}
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.renderLista()}
            </div>
        )
    }
}

function mapStateToProps({product}){
    return{
        product
    }
}

export default connect(mapStateToProps, actions)(Mensaje);