import React from "react";
import {reduxForm} from "redux-form"
import FormAlta from "./forms/FormAlta";
import FormAltaReview from "./forms/FormAltaReview";

class Alta extends React.Component{

    state = { altaReview:false }

    renderContent(){
        if(this.state.altaReview){
            return <FormAltaReview onCancel={() => this.setState({altaReview:false})} />
        }

        return <FormAlta onFormAltaSubmit={() => this.setState({altaReview:true})}/>
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
    {form:"formAlta"}
)(Alta);