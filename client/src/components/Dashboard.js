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
                el modelo del producto, el número de cotización perteneciente a la orden de compra
                la sucursal, la cantidad a retirar, el nombre del contratista, la persona responsable
                que se llevó el material a nombre del contratista, el responsable de Digital Fire
                que entregó el material y la obra a la que fue destinada. En caso de ser llenado correctamente, 
                se actualizará la cantidad del producto y se creará un Registro del material que salió de la 
                sucursal. Antes de poder dar de baja material, se tiene que llenar una orden de compra."
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
                en stock de dicha sucursal. Se tendrá la opción de poder descargar el archivo tanto en PDF como Excel."
                route="/inventario"
                button="Buscar"
            />
            <Card 
                title="Registro de Orden de compra"
                description="Se procederá al llenado de una Orden de Compra. En ella se llenarán los requisitos correspondientes
                tales como: El número de cotización, la obra, cliente o contratista, y los artículos pertenecientes a la orden así
                como su cantidad. Es importante recalcar que se tiene que llenar una orden de compra antes de poder dar de baja material."
                route="/orden"
                button="Siguiente"
            />
            <Card 
                title="Estado de Orden de compra"
                description="Aparecerá un formulario donde se pedirá el número de cotización de una orden de compra. En caso de 
                existir, se podrá ver el estado de esta en cuanto, como lo es la cantidad faltante que se necesita de cada material
                revisanto su existencia en las diferentes sucursales."
                route="/ordenstatus"
                button="Siguiente"
            />
            <Card 
                title="Total de cantidades faltantes"
                description="Aparecerá una tabla con las cantidades faltantes acumuladas de todas las órdenes de compra, junto con las
                cantidades que existen actualmente en las respectivas sucursales. Puede ser de ayuda para saber cuánto material encargar
                en caso de ser necesario."
                route="/cantidades"
                button="Siguiente"
            />
            <Card 
                title="Órdenes de compra activas"
                description="Aparecerá una tabla con las órdenes de compra que falten por realizarse"
                route="/ordenesactivas"
                button="Siguiente"
            />
        </div>
        
    );
}

export default Dashboard;