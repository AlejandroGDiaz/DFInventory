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
                        title={card.title}
                        description={card.descripcion}
                        route={card.route}
                        button={card.button}
                    />
                )
            })
        }else{
            return user.permisos.map((permiso) => {
                const propsCard = infoCards.find( elemento => elemento.permiso == permiso)
                return( 
                    <Card 
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
        <div className="ui cards">
            {renderCards()}
        </div>
    )
    
    
}

const mapStateToProps = (state) => {
    return{
        user:state.user
    }
}

export default connect(mapStateToProps, null)(Dashboard);