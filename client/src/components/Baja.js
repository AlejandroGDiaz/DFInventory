import React from "react";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";

import FormBaja from "./forms/FormBaja";
import FormBajaReview from "./forms/FormBajaReview";
import Restricted from "./auth/Restricted";

class Baja extends React.Component{

    state = {bajaReview: false}

    renderContent(){
        if(this.state.bajaReview){
            return <FormBajaReview onCancel={() => this.setState({bajaReview:false})}/>
        }

        return <FormBaja onFormBajaSubmit={() => this.setState({bajaReview:true})}/>
    }

    render(){
        if(this.props.user.permisos.includes("admin")||this.props.user.permisos.includes("bajaMaterial")){
            return(
                <div>
                    {this.renderContent()}
                </div>
            )
        }
        else{
            return <Restricted/>
        }
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

export default reduxForm(
    {form:"formBaja"}
)(connect(mapStateToProps, null)(Baja));