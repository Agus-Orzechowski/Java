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

function PrecioDeProducto () {
    let PrecioMalbec = 1500;
    let PrecioCabernet = 1200;
    let PrecioBonarda = 1700;

    let producto = prompt ("Ingrese el producto que desea comprar : (Malbec,Cabernet,Bonarda)");
    let precio;
    switch (producto) {
        case "Malbec" :
            precio = PrecioMalbec;
            break;
        case "Cabernet" :
            precio = PrecioCabernet;
            break;
        case "Bonarda" :
            precio = PrecioBonarda;
            break;
        default:
            precio = false;
            break;
    }

    return precio;
}

function CantidadCuotas() {
    let cuotas = number(prompt("ingrese la cantidad de cuotas con las que desea pagar (3,6 o 12"));

    if (!(cuotas===3|| cuotas===6|| cuotas===12)) {
        cuotas = false;
    }

    return cuotas;
}

function ValorDeCuota() {
    let TresCuotas = 1.25;
    let SeisCuotas = 1.3;
    let DoceCuotas = 1.5;

    let ValorDeCuota;

    if (cuotas===3){
        ValorDeCuota = precio * TresCuotas;
    }

    if (cuotas===6){
        ValorDeCuota = precio * SeisCuotas;
    }

    if (cuotas===12){
        ValorDeCuota = precio * DoceCuotas;
    }

    return ValorDeCuota / CantidadCuotas
}

function CalculoCuotas (){
    let precio = PrecioDeProducto();
    let CantidadCuotas = CantidadCuotas();
    

    if (precio === false) {
        alert ("Ingrese un producto valido de los indicados");
        return;
    }
    
    if (CantidadCuotas === false) {
        alert ("Ingrese un valor de cuotas valido (3, 6 o 12)");
        return;
    }

}

CalculoCuotas ();

