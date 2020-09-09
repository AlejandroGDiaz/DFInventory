import React from "react";
import {reduxForm} from "redux-form";
import FormRegister from "./forms/FormRegister";
import RegisterView from "./forms/RegisterView";

class Register extends React.Component{

    state = {registerView:false}

    renderContent(){
        if(this.state.registerView){
            return <RegisterView onCancel={() => this.setState({registerView:false})}/>
        }

        return <FormRegister onFormRegisterSubmit={() => this.setState({registerView:true})}/>
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
    form:"formRegister"
}) (Register);