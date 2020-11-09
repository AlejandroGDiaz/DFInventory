module.exports = (orden, cantidad, codigo) => {
    let discrepancia = false
    let diferencia = 0
    let articulo = orden.articulos.filter(articulo => articulo.codigo === codigo)
    

    diferencia = articulo[0].cantidadFaltante - cantidad
    
    if(diferencia < 0){
        discrepancia = true
    }

    return discrepancia
    
    
}