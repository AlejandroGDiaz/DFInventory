module.exports = (producto, cantidad, sucursal) => {
    let discrepancia = false
    let diferencia = 0

    if(sucursal==="Mexicali"){
         diferencia = producto.cantidadMXLI - cantidad
    }else{
        diferencia = producto.cantidadQRO - cantidad
    }
    if(diferencia < 0){
        discrepancia = true
    }
    return discrepancia
}