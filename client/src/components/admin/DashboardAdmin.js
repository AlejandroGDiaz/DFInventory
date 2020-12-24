import React from "react";

import Card from "../Card";

const DashboardAdmin = () => {
    return(
    <div className="ui cards">
        <Card
            title="Crear producto"
            description="Aparecera un formulario para crear un nuevo producto. Se pedirá el modelo, la descripción
            la cantidad de este producto en la sucursal de Mexicali y en la de Querétaro"
            route="/admin/nuevoproducto"
            button="Agregar"
        />
    </div>)
}

export default DashboardAdmin;