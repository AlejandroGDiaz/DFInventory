import React from "react";
import { Link } from "react-router-dom";
import CodigoDataList from "./CodigoDataList";

class SearchProduct extends React.Component {

    state = {search:""};
    
    onInputChange = (e) => {
        this.setState({search:e.target.value});
    }

    render(){
        return(
            <div className="container ui form" style={{marginTop:"20px"}}>
                <h2 className="ui dividing header">Favor de ingresar el modelo del producto</h2>
                <div className="field">
                    <div className="ui input">
                        <input type="text" value={this.state.search} onChange={this.onInputChange} list="codigo"/>
                        <CodigoDataList id="codigo"/>
                    </div>
                </div>

                <Link className="ui button left floated" to={"/"}>Regresar</Link>
                <Link className="ui button right floated" to={`/producto/${this.state.search}`}>Buscar</Link>

            </div>
        );
    }
}

export default SearchProduct;