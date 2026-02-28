
let carrito = [];

function agregarProducto(producto){
    if(producto === producto) throw new Error('Ingresaste 2 veces el mismo producto');
     carrito.push(producto);
}

function eliminarProducto(producto){
    carrito.pop(producto);
}

function vaciarCarrito(){

}

function calcularTotal(){

}








