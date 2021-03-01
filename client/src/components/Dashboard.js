import React from "react";
import {connect} from "react-redux";

import Card from "./Card"

import infoCards from "../data/infoCards";

const Dashboard = ({user}) => {

    const renderCards = () => {

        if(user.permisos.includes("admin")){
            return infoCards.map((card) => {
                return(
                    <Card
                        key = {card.title}
                        title={card.title}
                        description={card.descripcion}
                        route={card.route}
                        button={card.button}
                    />
                )
            })
        }else{
            return user.permisos.map((permiso) => {
                const propsCard = infoCards.find( elemento => elemento.permiso === permiso)
                return( 
                    <Card 
                        key={propsCard.title}
                        title={propsCard.title}
                        description={propsCard.descripcion}
                        route={propsCard.route}
                        button={propsCard.button}
                    />
                )
            })//user.permisos.map((permiso)
        }
    }
   
    return(
        <div className="ui container" style={{marginTop:"20px"}}>
            <h2 className="ui dividing header"> 
                Buen día {user.nombre?user.nombre:""}, seleccione una opción:
            </h2>
            <div className="ui cards">
                {renderCards()}
            </div>
        </div>    
    )
    
    
}

const mapStateToProps = (state) => {
    return{
        user:state.user
    }
}

export default connect(mapStateToProps, null)(Dashboard);