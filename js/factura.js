let productos = [
    { nombre: 'madera', precio: 1.50, cantidad: 14 },
    { nombre: 'clavo ultra', precio: 0.55, cantidad: 120 },
    { nombre: 'maquina para soldar', precio: 75.00, cantidad: 5 },
    { nombre: 'palo', precio: 0.50, cantidad: 13 },
    { nombre: 'serucho', precio: 2.5, cantidad: 89 },
    { nombre: 'bailejo', precio: 2.00, cantidad: 59 }
    
];

productos.forEach(producto => {
    producto.total = producto.precio * producto.cantidad;
});

var el = document.getElementById("cost");
let contenido = ""; 

for (let i = 0; i < productos.length; i++) {
    contenido +='<h4>'+ productos[i].nombre + ' $' + productos[i].total +'</h4>' +'<br>'; 
}


el.innerHTML = contenido;