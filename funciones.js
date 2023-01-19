function Vino (descripcion, precio){
    this.descripcion = descripcion;
    this.precio = precio;
}
let listaDeVinos = [ 
    new vino ("malbec", 1500),
    new vino ("cabernet", 1700),
    new vino ("bonarda", 1200)       
];

for (const vino of listaDeVinos){
    console.log(vino);
}