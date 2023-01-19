class auto {
    constructor (varietal , color , edad) {
        this.varietal = varietal;
        this.edad = edad;
        this.color = color;
    }
 Precio (){
    alert ("El precio del vino " + this.varietal + "cuesta $xx");
 }
}   
let listaVinos = [
    new vino (Malbec , tinto , joven),
    new vino (Cabernet , tinto , añejo),
    new vino (Bonarda , blanco , joven)
];

