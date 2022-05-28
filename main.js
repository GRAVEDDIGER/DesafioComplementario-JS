let dolar = 119.48;
let euro = 128.23;
let real = 25.26;
let opcion=0;
let cantidad=0;
let nombre="";
let resultado =0;
do {
opcion =parseInt(prompt("Que moneda desea convertir (0 SALIR, 1 DOLAR, 2 EURO, 3 REAL"));
if (opcion==0) {break;}
cantidad =parseFloat(prompt("Cantidad de pesos a convertir"));
nombre =prompt("Cual es su nombre?");
resultado=0;
switch (opcion) {
    case 1:
    resultado=cantidad/dolar;
    alert(`Hola ${nombre} la conversion de ${cantidad} pesos a dolares es de ${resultado} `)        ;
    continue;
    case 2:
        resultado=cantidad/euro;
        alert(`Hola ${nombre} la conversion de ${cantidad} pesos a euros es de ${resultado} `)        ;
        continue;
    case 3:
        resultado=cantidad/real;
    alert(`Hola ${nombre} la conversion de ${cantidad} pesos a reales es de ${resultado} `)        ;
    continue;
    default:
        alert("Comando no interpretado");
        continue;
}
}while (opcion != 0)


