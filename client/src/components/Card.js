import React from "react";
import {Link} from "react-router-dom"

const Card = ({title, description, route, button}) => {
    return(
        <div className="card" style={{marginTop:"20px", marginLeft:"20px"}}>
            <div className="content">
                <div className="header">{title}</div>
                <div className="description">
                    {description}
                </div>  
            </div>           
            <div className="extra content">
                <Link className="ui bottom attached button" to={route}>{button}</Link>
            </div>
        </div>
    );
}

export default Card;