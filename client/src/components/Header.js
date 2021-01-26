import React from "react";
import {connect} from "react-redux";
import { withRouter, Link } from "react-router-dom";
import * as actions from "../actions"

const Header = ({user, logOut, history}) => {

    const renderSalir = () => {
        if(!user){
            return(
                <div className="header item" style={{color:"white"}}>
                    Hola, extraño
                </div>
            )
        }else{
            return(
                <button className="ui inverted button" onClick={() => {
                    logOut(history)
                }}>
                    Hola, {user.nombre}
                    <br/>
                    Presione para salir
                </button>
            )
        }
        
    }

    return(
        <div className="ui menu inverted segment" >
            <Link className="header item" to="/" style={{color:"white"}}>
                Digital Fire Industries
            </Link>
            <div className="right menu">
                {renderSalir()}
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return{
        userAuth: state.userAuth,
        user: state.user
    }

}

export default connect(mapStateToProps, actions)(withRouter(Header))