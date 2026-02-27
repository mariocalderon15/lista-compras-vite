
function agegarProductoAlDOM(producto){
    const ul = document.createElementById('lista-productos');
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} -${producto.precio}`
    ul.appendChild(li);
}

function actualizarTotal(lista){
    const totalElement = document.getElementById('total-compras');
    totalElement.textContent = `$${lista.total()}`;
}

export {agegarProductoAlDOM, actualizarTotal};