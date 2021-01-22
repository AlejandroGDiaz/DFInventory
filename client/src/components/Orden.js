import React from "react";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";

import FormOrden from "./forms/FormOrden";
import FormOrdenReview from "./forms/FormOrdenReview";
import Restricted from "./auth/Restricted";

class Orden extends React.Component{

    state = {ordenReview: false}

    renderContent(){
        if(this.state.ordenReview){
            return <FormOrdenReview onCancel={() => this.setState({ordenReview:false})}/>
        }
        return <FormOrden onFormOrdenSubmit={() => this.setState({ordenReview:true})}/>
    }

    render(){
        if(this.props.user.permisos.includes("admin")||this.props.user.permisos.includes("altaOrden")){
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

export default reduxForm({
    form: "formOrden"
})(connect(mapStateToProps, null)(Orden));