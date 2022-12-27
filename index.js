let saludo = "Un gusto hablar con vos ";
let nombreDeUsuario;
nombreDeUsuario= prompt (" Ingrese su nombre");
let edad = prompt (" Ingrese su edad");
edad = Number(edad);
if(edad > 18) {
    alert (" Usted puede ingresar a la pagina correctamente");
    alert (saludo + nombreDeUsuario );
}
else{
    alert (" Usted no puede ingresar a la pagina");
}
console.log(nombreDeUsuario);
console.log(edad)


