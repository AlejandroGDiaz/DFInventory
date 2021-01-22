import React from "react"
import {connect} from "react-redux"

import Landing from "./auth/Landing";
import Dahsboard from "./Dashboard";

const Root = ({user}) => {

    const renderLandingOrDashboard = () => {
        if(user){
            return <Dahsboard/>
        }else{
            return <Landing/>
        }
    }

    return(
        <div>
            {renderLandingOrDashboard()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Root)