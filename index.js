let saludo = "Un gusto hablar con vos ";
let nombreDeUsuario;
nombreDeUsuario= prompt (" Ingrese su nombre");
let edad = prompt (" Ingrese su edad");
edad = Number(edad);
if(edad > 18) {
    alert (" Usted puede ingresar a la pagina correctamente");
    alert (saludo + nombreDeUsuario )
}
else{
    alert (" Usted no puede ingresar a la pagina");
}
console.log(nombreDeUsuario);
console.log(edad)

function obtenerPrecioDeProducto () {
    let precioMalbec = 1500;
    let precioCabernet = 1200;
    let precioBonarda = 1700;

    let producto = prompt ("Ingrese el producto que desea comprar : (malbec,cabernet,bonarda)");
    let precio;
   
    switch (producto) {
        case "malbec" :
            precio = precioMalbec;
            break;
        case "cabernet" :
            precio = precioCabernet;
            break;
        case "bonarda" :
            precio = precioBonarda;
            break;
        default:
            precio = false;
            break;
    }

    return precio;
}

function obtenerCantidadCuotas() {
    let cuotas = Number(prompt("ingrese la cantidad de cuotas con las que desea pagar (3,6 o 12)"));

    if (!(cuotas===3|| cuotas===6|| cuotas===12)) {
        cuotas = false;
    }

    return cuotas;
}

function obtenerValorDeCuota(precio, cantidadCuotas) {
    let interesTresCuotas = 1.25;
    let interesSeisCuotas = 1.3;
    let interesDoceCuotas = 1.5;

    let valorDeCuota;

    if (cantidadCuotas===3){
        valorDeCuota = precio * interesTresCuotas;
    }

    if (cantidadCuotas===6){
        valorDeCuota = precio * interesSeisCuotas;
    }

    if (cantidadCuotas===12){
        valorDeCuota = precio * interesDoceCuotas;
    }

    return valorDeCuota / cantidadCuotas
}

function calculoCuotas (){
    let precio = obtenerPrecioDeProducto();
    let cantidadCuotas = obtenerCantidadCuotas();
    let valorDeCuota

    if (precio === false) {
        alert ("Ingrese un producto valido de los indicados");
        return;
    }
    
    if (cantidadCuotas === false) {
        alert ("Ingrese un valor de cuotas valido (3, 6 o 12)");
        return;
    }
    
    valorDeCuota = obtenerValorDeCuota (precio,cantidadCuotas)

    alert ("Precio total de $ " + precio + " en " + cantidadCuotas + " , cuotas de $" + valorDeCuota)
}

calculoCuotas ();

