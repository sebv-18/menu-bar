<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Colico Restobar - Menú Digital</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Encabezado -->
  <header class="header">
    <h1 class="logo-title">COLICO RESTOBAR</h1>
    <p class="subtitle">CUNCO • ARAUCANÍA</p>

    <!-- Buscador -->
    <div class="search-box">
      <span class="search-icon">🔍</span>
      <input type="text" id="searchInput" placeholder="Buscar en el menú..." onkeyup="filterMenu()">
    </div>
  </header>

  <!-- Categorías -->
  <nav class="categories">
    <button class="cat-btn active" onclick="filterCategory('todos', this)">Todos</button>
    <button class="cat-btn" onclick="filterCategory('papas', this)">Box Papas</button>
    <button class="cat-btn" onclick="filterCategory('burgers', this)">Hamburguesas</button>
    <button class="cat-btn" onclick="filterCategory('chorrillanas', this)">Chorrillanas</button>
    <button class="cat-btn" onclick="filterCategory('bebidas', this)">Barra</button>
  </nav>

  <!-- Grilla de Productos -->
  <main class="menu-grid" id="menuGrid">
    <!-- Papas -->
    <article class="card" data-category="papas">
      <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=400&auto=format&fit=crop');"></div>
      <div class="card-body">
        <h3>PLAYA LA ISLA</h3>
        <p>Papas fritas tradicionales crujientes</p>
        <div class="card-footer">
          <span class="price">$3.500</span>
          <button class="add-btn" onclick="addToCart('Playa La Isla', 3500)">+ Agregar</button>
        </div>
      </div>
    </article>

    <article class="card" data-category="papas">
      <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=400&auto=format&fit=crop');"></div>
      <div class="card-body">
        <h3>PLAYA PONCIANO</h3>
        <p>Papas fritas, tocino picado y queso fundido</p>
        <div class="card-footer">
          <span class="price">$5.500</span>
          <button class="add-btn" onclick="addToCart('Playa Ponciano', 5500)">+ Agregar</button>
        </div>
      </div>
    </article>

    <!-- Hamburguesas -->
    <article class="card" data-category="burgers">
      <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop');"></div>
      <div class="card-body">
        <h3>LA CALLAMPERA</h3>
        <p>Smash carne, queso, champiñones, cebolla caramelizada</p>
        <div class="card-footer">
          <span class="price">$7.500</span>
          <button class="add-btn" onclick="addToCart('La Callampera', 7500)">+ Agregar</button>
        </div>
      </div>
    </article>

    <article class="card" data-category="burgers">
      <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=400&auto=format&fit=crop');"></div>
      <div class="card-body">
        <h3>COLICO BURGER</h3>
        <p>Doble smash carne, tocino, palta molida y lechuga</p>
        <div class="card-footer">
          <span class="price">$8.500</span>
          <button class="add-btn" onclick="addToCart('Colico Burger', 8500)">+ Agregar</button>
        </div>
      </div>
    </article>

    <!-- Chorrillanas -->
    <article class="card" data-category="chorrillanas">
      <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=400&auto=format&fit=crop');"></div>
      <div class="card-body">
        <h3>CODIHUE</h3>
        <p>Papas fritas, carne de vacuno salteada, cebolla y huevos</p>
        <div class="card-footer">
          <span class="price">$10.000</span>
          <button class="add-btn" onclick="addToCart('Codihue', 10000)">+ Agregar</button>
        </div>
      </div>
    </article>
  </main>

  <!-- Barra de Pedido Inferior -->
  <div class="order-bar">
    <div class="order-info">
      <div class="cart-badge" id="cartCount">0</div>
      <div>
        <small>Total a pagar</small>
        <div class="total-price" id="cartTotal">$0</div>
      </div>
    </div>
    <button class="checkout-btn" onclick="sendOrder()">Ver Pedido &gt;</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
