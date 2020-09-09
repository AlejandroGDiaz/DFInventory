import React from "react";
import {connect} from "react-redux";
import * as actions from "../../actions";

class RegisterView extends React.Component{

    componentDidMount(){
        this.props.fetchRegister(this.props.registerValues)
    }


    renderRows(){
       return this.props.registers.map(register => {
            return(
                <tr key={register._id}>
                    <td>{register.fecha}</td>
                    <td>{register.codigo}</td>
                    <td>{register.sucursal}</td>
                    <td>{register.cantidad}</td>
                    <td>{register.contratista}</td>
                    <td>{register.responsable}</td>
                    <td>{register.obra}</td>
                </tr>
            );
        })
    }

    renderTable(){
        return(
            <div>
                <table className="ui fixed single line celled table">
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Producto</th>
                            <th>Sucursal</th>
                            <th>Cantidad</th>
                            <th>Contratista</th>
                            <th>Responsable</th>
                            <th>Obra</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        );
    }

    render(){
        return(
            <div>
                {this.renderTable()}
                <button className="ui button left floated labeled icon" style={{marginTop:"15px"}} onClick={this.props.onCancel}><i className="angle left icon"></i>Regresar</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        registerValues: state.form.formRegister.values,
        registers: state.register
    }
}

export default connect(mapStateToProps, actions)(RegisterView);