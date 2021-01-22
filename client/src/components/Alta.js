import React from "react";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";

import FormAlta from "./forms/FormAlta";
import FormAltaReview from "./forms/FormAltaReview";
import Restricted from "./auth/Restricted";

class Alta extends React.Component{

    state = { altaReview:false }

    renderContent(){
        if(this.state.altaReview){
            return <FormAltaReview onCancel={() => this.setState({altaReview:false})} />
        }

        return <FormAlta onFormAltaSubmit={() => this.setState({altaReview:true})}/>
    }

    render(){
        if(this.props.user.permisos.includes("admin")||this.props.user.permisos.includes("altaMaterial")){
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
    {form:"formAlta"}
)(connect(mapStateToProps, null)(Alta));