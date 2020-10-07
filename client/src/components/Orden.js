import React from "react";
import {reduxForm} from "redux-form"
import FormOrden from "./forms/FormOrden";
import FormOrdenReview from "./forms/FormOrdenReview";

class Orden extends React.Component{

    state = {ordenReview: false}

    renderContent(){
        if(this.state.ordenReview){
            return <FormOrdenReview onCancel={() => this.setState({ordenReview:false})}/>
        }
        return <FormOrden onFormOrdenSubmit={() => this.setState({ordenReview:true})}/>
    }

    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm({
    form: "formOrden"
})(Orden);