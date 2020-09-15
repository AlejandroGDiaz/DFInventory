import React from "react";
import jsPDF from 'jspdf';
import 'jspdf-autotable'

import moment from "moment";

class Print extends React.Component{

    exportPDF(){
        const unit = "pt";
        const size = "A4";
        const orientation = "portrait";

        const marginLeft = 40;

        const date = moment().format("DD/MM/YYYY")

        const doc = new jsPDF(orientation, unit, size);

        doc.setFontSize(15);

        const title = this.props.title;
        const headers = this.props.headers;

        const data = this.props.data;

        let content = {
            startY: 50,
            head: headers,
            body: data
        }

        doc.text(title, marginLeft, 40);
        doc.text(500, 30, date);
        doc.autoTable(content);
        doc.save("Inventario.pdf")
        
    }

    render(){
        return(
            <div>
                <button 
                    onClick={() => this.exportPDF()} 
                    className={this.props.className} 
                    style={this.props.style}>
                        Descargar PDF
                </button>
            </div>
        )
    }
}

export default Print;