const carritoDOM = document.getElementById ("carrito");
const productosDOM = document.getElementById ("productos");

let productos = [
    new Producto ("Malbec",1500),
    new Producto ("Cabernet",1200),
    new Producto ("Bonarda", 1700),
];

let carrito = [];
 
let idContadora = 0;

function Producto (descripcion, precio){
    this.descripcion = descripcion;
    this.precio = precio;
}

function renderProductos (){
    productos.forEach (producto =>{
        let divProducto = document.createElement ("div");
        let btnAgregarAlCarrito = document.createElement ("button");
        
        btnAgregarAlCarrito.innerText = "Agregar producto al carrito";
        btnAgregarAlCarrito.onclick = () => agregarProductoAlCarrito (producto);
        divProducto.innerText = producto.descripcion;
        divProducto.appendChild (btnAgregarAlCarrito);
         
        productosDOM.appendChild(divProducto);
    })
}

function renderCarrito (){
    
    carrito.forEach (producto =>  {
        let divProducto = document.createElement ("div");
        let btnQuitarDelCarrito = document.createElement ("button");
        
        btnQuitarDelCarrito.innerText = "Quitar producto al carrito";
        btnQuitarDelCarrito.onclick = () => quitarProductoDelCarrito (producto);
        divProducto.innerText = producto.descripcion;
        divProducto.appendChild (btnAgregarAlCarrito);
        
        carritoDOM.appendChild(divProducto);
    })
}

function agregarProductoAlCarrito(producto) {
    let productoCarrito ={
        ...producto,
        id: idContadora++
    }
    carrito.push (productoCarrito);
    renderCarrito();
}

function quitarProductoDelCarrito(producto) {
    carrito = carrito.filter (productoCarrito => producto.id !== productoCarrito.id);
    renderCarrito();
}

renderProductos();
renderCarrito();
