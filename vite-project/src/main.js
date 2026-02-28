
import './style.css'

let productos = [
  {nombre: 'manzana', precio: 1.30, categoria: 'fruta'},
  {nombre: 'uva', precio: 1.30, categoria: 'fruta'},
  {nombre: 'pera', precio: 1.30, categoria: 'fruta'},
  {nombre: 'naranja', precio: 1.30, categoria: 'fruta'},
  {nombre: 'mandarina', precio: 1.30, categoria: 'fruta'}
];

let filtroActual = '';

function render(){
  const lista = document.getElementById('lista-productos');
  lista.innerHTML = '';

  const productosFiltrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(filtroActual.toLowerCase())
  );

  productosFiltrados.forEach(producto => {
    const li = document.createElement('li');
    li.textContent = producto.nombre;

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';

    btnEliminar.addEventListener('click', ()=>{
      eliminarProducto(producto);
    });

    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
}

function eliminarProducto(productoEliminar){
  productos = productos.filter(p => p !== productoEliminar);
  render();
}

const inputBuscar = document.getElementById('input-buscar');
const btnBuscar = document.getElementById('btn-buscar');

btnBuscar.addEventListener('click', ()=> {
  filtroActual = inputBuscar.value;
  render();
});

render();








