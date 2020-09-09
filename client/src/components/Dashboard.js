import React from "react";

import Card from "./Card"

const Dashboard = () => {
    return(
        
        <div className="ui cards">
            <Card 
                title="Buscar producto"
                description="Busca un producto por su modelo. El resultado de una correcta
                búsqueda indicará la descripción del modelo, así como la cantidad
                de este en la sucursal de Mexicali y en la de Querétaro."
                route="/producto"
                button="Buscar"
            />
            <Card 
                title="Ingresar material"
                description="Aparecerá un formulario para dar ingreso de material. Solicitará el
                modelo del producto, la sucursal y la cantidad a ingresar. En dado caso de que se
                haya llenado correctamente, se actualizará la cantidad del producto."
                route="/alta"
                button="Dar de alta"
            />
            <Card 
                title="Dar de baja material"
                description="Aparecerá un formulario para poder sacar material del sistema. Solicitará
                el modelo del producto, la sucursal, la cantidad a retirar, el nombre del contratista, la persona responsable
                que se llevó el material a nombre del contratista y la obra a la que fue destinada. En caso de ser llenado correctamente, 
                se actualizará la cantidad del producto y se creará un Registro del material que salió de la 
                sucursal."
                route="/baja"
                button="Dar de baja"
            />
            <Card 
                title="Buscar registro"
                description="Aparecerá un formulario para buscar los registros creados a partir del egreso del
                material. Se podrá buscar por modelo, sucursal, contratista, responsabe, obra o fecha. Es importante que en
                caso de que se busque por contratista, responsable u obra, se ingrese de la misma manera en la que se dio cuando
                se retiró el material. En caso de buscar por fecha, se tendrá que seguir el siguiente formato (DD/MM/AAAA)."
                route="/register"
                button="Buscar"
            />
            <Card 
                title="Inventario"
                description="Se seleccionará la sucursal a revisar y posteriormente aparacerá el total de materiales que hay
                en stock de dicha sucursal."
                route="/inventario"
                button="Buscar"
            />
        </div>
        
    );
}

export default Dashboard;