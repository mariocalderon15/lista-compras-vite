import './style.css'
import Productos from './productos.js';
import ListaDeCompras from './lista-compras.js';
import {agegarProductoAlDOM, actualizarTotal } from './dom.js';

const listaCompras = new ListaDeCompras();

document.getElementById('agregar-produto').addEventListener('click',function(){
  const nombre = document.getElementById('producto-nombre').value;
  const precio = parseFloat(document.getElementById('producto-precio').value);
  const categoria = document.getElementById('procuto-categoria').value;

  const procuto = new Productos(nombre, precio, categoria);
  listaCompras.agregarProductos(producto);

  agegarProductoAlDOM(producto);
  actualizarTotal(listaCompras);
} )












