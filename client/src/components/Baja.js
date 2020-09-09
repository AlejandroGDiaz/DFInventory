import React from "react";
import {reduxForm} from "redux-form"
import FormBaja from "./forms/FormBaja";
import FormBajaReview from "./forms/FormBajaReview"

class Baja extends React.Component{

    state = {bajaReview: false}

    renderContent(){
        if(this.state.bajaReview){
            return <FormBajaReview onCancel={() => this.setState({bajaReview:false})}/>
        }

        return <FormBaja onFormBajaSubmit={() => this.setState({bajaReview:true})}/>
    }

    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm(
    {form:"formBaja"}
)(Baja);