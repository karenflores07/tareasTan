

const productos = [
    { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./images/taco-negro.jpg" },
    { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./images/taco-azul.jpg" },
    { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./images/bota-negra.jpg" },
    { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./images/bota-azul.jpg" },
    { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./images/zapato-rojo.jpg" }
  ]; /*  punto y coma al final */ /* y cambie las rutas de imagenes por que las meti a una carpeta */ 
  
  
  
  /* elimine var y cambie por const */
  const listaDeProductos = document.getElementById("lista-de-productos");
  const inputFiltro = document.querySelector("#filtro-input"); /* agregue id al html y lo puse aqui */
  const botonDeFiltro = document.querySelector("button"); /* cambie nombre de variables por uno mas descriptivo */
  
  // Función para mostrar productos en la página
  const mostrarProductos = (productosAMostrar) => {
    listaDeProductos.innerHTML = ""; 
  
    if (productosAMostrar.length === 0) {
      listaDeProductos.innerHTML = "<p>No se encontraron productos.</p>"; /* cambiie el for por if  */
      return;
    }
   /*  for (let i = 0; i < productosFiltrados.length; i++) {
        var d = document.createElement("div")
        d.classList.add("producto") */
  
  
    productosAMostrar.forEach(producto => {
      const d = document.createElement("div");
      d.classList.add("producto");
  
      const ti = document.createElement("p");
      ti.classList.add("titulo");               /* cambio de var */
      ti.textContent = producto.nombre;
    
  
      const imagen = document.createElement("img");
      imagen.setAttribute('src', producto.img);
      imagen.setAttribute('alt', producto.nombre);
  
      d.appendChild(ti);
      d.appendChild(imagen);
  
      listaDeProductos.appendChild(d); /* camnbie li por listaDeProductos */
    });
  };
  
  // Mostrar todos los productos al cargar la página
  mostrarProductos(productos);
  
  
  botonDeFiltro.onclick = function () {
    const texto = inputFiltro.value.trim().toLowerCase();
    const productosFiltrados = filtrado(productos, texto); 
    mostrarProductos(productosFiltrados);
  };
  /* le quite el array [] */
  const filtrado = (productos, texto) => {
    return productos.filter(item =>
      item.tipo.toLowerCase().includes(texto) || item.color.toLowerCase().includes(texto)
    );
  };