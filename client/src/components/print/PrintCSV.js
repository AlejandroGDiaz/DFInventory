import React from "react";
import { CSVLink } from "react-csv";

class PrintCSV extends React.Component{
    render(){
        return(
            
            <CSVLink 
                data={this.props.data}
                filename={this.props.title}
                className={this.props.className}

            >
                    Descargar Excel
            </CSVLink>
            
        )
    }
}

export default PrintCSV;