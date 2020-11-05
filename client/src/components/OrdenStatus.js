import React from "react";
import {reduxForm} from "redux-form";
import FormOrdenStatus from "./forms/FormOrdenStatus";
import OrdenStatusView from "./forms/OrdenStatusView";

class OrdenStatus extends React.Component{
    state ={ordenView:false}
    
    renderContent(){
        if(this.state.ordenView){
            return <OrdenStatusView onCancel={() => this.setState({ordenView:false})}/>
        }
        return <FormOrdenStatus onFormSubmit={() => this.setState({ordenView:true})}/>
    }
    render(){
        return(
            <div>
                {this.renderContent()}
                {console.log(this.props)}
            </div>
        )
    }
}

export default reduxForm({
    form: "formOrdenStatus"
})(OrdenStatus);