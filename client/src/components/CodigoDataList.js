import React from "react";
import {connect} from "react-redux";
//import * as actions from "../actions"
import {fetchCodes} from "../actions"

class CodigoDataList extends React.Component{

    componentDidMount(){
        this.props.fetchCodes()
    }

    renderOptions(){
        return this.props.codes.map(code => {
            return (
                <option key={code._id} value={code.codigo}/>
            )
        })
    }

    render(){
        return(
            <datalist id={this.props.id}>
                {this.renderOptions()}
            </datalist>
        )
    }
}

function mapStateToProps(state){
    return{
        codes: state.codes
    }
}

export default connect(mapStateToProps, {fetchCodes})(CodigoDataList);