// Número de teléfono de recepción del pedido (sin +)
const NUMERO_WHATSAPP = "56912345678";

// Lista de productos con imágenes estables de Unsplash
const productos = [
  {
    id: 1,
    nombre: "PLAYA LA ISLA",
    ingredientes: ["Papas fritas"],
    imagen: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80",
    precios: [
      { porcion: "1-2 PERSONAS", valor: 3500 },
      { porcion: "3-4 PERSONAS", valor: 5500 }
    ]
  },
  {
    id: 2,
    nombre: "PLAYA HOGAR",
    ingredientes: ["Papas fritas", "Salchichas"],
    imagen: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&q=80",
    precios: [
      { porcion: "1-2 PERSONAS", valor: 4000 },
      { porcion: "3-4 PERSONAS", valor: 6500 }
    ]
  },
  {
    id: 3,
    nombre: "PLAYA PONCIANO CASTRO",
    ingredientes: ["Papas fritas", "Tocino", "Queso derretido"],
    imagen: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&q=80",
    precios: [
      { porcion: "1-2 PERSONAS", valor: 5500 },
      { porcion: "3-4 PERSONAS", valor: 10000 }
    ]
  }
];

let carrito = [];

function cargarMenu() {
  const contenedor = document.getElementById('menu-container');
  contenedor.innerHTML = '';

  productos.forEach(prod => {
    const tarjeta = document.createElement('article');
    tarjeta.className = 'tarjeta-plato';

    const preciosHTML = prod.precios.map((p, index) => `
      <button class="btn-precio" onclick="agregarAlCarrito(${prod.id}, ${index})">
        <span class="porcion">${p.porcion}</span>
        <span class="valor">$${p.valor.toLocaleString('es-CL')}</span>
      </button>
    `).join('');

    tarjeta.innerHTML = `
      <h2>${prod.nombre}</h2>
      <img src="${prod.imagen}" alt="${prod.nombre}">
      <p class="ingredientes"><strong>INGREDIENTES:</strong> ${prod.ingredientes.join(', ')}</p>
      <div class="precios-grid">${preciosHTML}</div>
    `;

    contenedor.appendChild(tarjeta);
  });
}

function agregarAlCarrito(productoId, precioIndex) {
  const producto = productos.find(p => p.id === productoId);
  const opcionPrecio = producto.precios[precioIndex];

  const item = {
    idUnico: Date.now(),
    nombre: producto.nombre,
    porcion: opcionPrecio.porcion,
    precio: opcionPrecio.valor
  };

  carrito.push(item);
  actualizarCarritoUI();
}

function eliminarDelCarrito(idUnico) {
  carrito = carrito.filter(item => item.idUnico !== idUnico);
  actualizarCarritoUI();
}

function actualizarCarritoUI() {
  const contenedorCarrito = document.getElementById('lista-carrito');
  const totalElemento = document.getElementById('total-precio');
  const btnWsp = document.getElementById('btn-whatsapp');

  if (carrito.length === 0) {
    contenedorCarrito.innerHTML = '<p class="carrito-vacio" style="color: #888888; text-align: center;">El carrito está vacío</p>';
    totalElemento.textContent = '$0';
    btnWsp.disabled = true;
    return;
  }

  contenedorCarrito.innerHTML = '';
  let total = 0;

  carrito.forEach(item => {
    total += item.precio;
    const div = document.createElement('div');
    div.className = 'item-carrito';
    div.innerHTML = `
      <div class="item-info">
        <p><strong>${item.nombre}</strong></p>
        <small>${item.porcion} - $${item.precio.toLocaleString('es-CL')}</small>
      </div>
      <button class="btn-eliminar" onclick="eliminarDelCarrito(${item.idUnico})">✕</button>
    `;
    contenedorCarrito.appendChild(div);
  });

  totalElemento.textContent = `$${total.toLocaleString('es-CL')}`;
  btnWsp.disabled = false;
}

function enviarPedidoWhatsApp() {
  if (carrito.length === 0) return;

  let mensaje = "Hola! 🍟 Quisiera hacer el siguiente pedido:\n\n";
  let total = 0;

  carrito.forEach((item, index) => {
    mensaje += `${index + 1}. *${item.nombre}* (${item.porcion}) - $${item.precio.toLocaleString('es-CL')}\n`;
    total += item.precio;
  });

  mensaje += `\n*Total a pagar: $${total.toLocaleString('es-CL')}*\n\n`;
  mensaje += "Quedo atento a la confirmación.";

  const mensajeEncoded = encodeURIComponent(mensaje);
  const urlWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${mensajeEncoded}`;

  window.open(urlWhatsApp, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
  cargarMenu();
  document.getElementById('btn-whatsapp').addEventListener('click', enviarPedidoWhatsApp);
});