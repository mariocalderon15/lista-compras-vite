
class ListaDeCompras{
    constructor(){
        this.productos = [];
    }
    agregarProductos(producto){
        this.productos.push(producto);
    }
    totalGastos(){
        this.productos.reduce((acum, p)=> acum + p.precio, 0);
    }
}
export default ListaDeCompras;