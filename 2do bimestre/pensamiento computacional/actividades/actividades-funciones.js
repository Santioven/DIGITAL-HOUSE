function pulgadasACentimetros(pulgadas) {
    let centimetros = pulgadas * 2.54;
    return centimetros;
}

let resultado = pulgadasACentimetros(10);
console.log(resultado);

function convertirStringAURL(string) {
    let url = "http://www." + string + ".com";
    return url;
}

let resultado = convertirStringAURL("pepito");
console.log(resultado);


function agregarAdmiracion(frase) {
    let fraseConAdmiracion = frase + "!";
    return fraseConAdmiracion;
}

let resultado = agregarAdmiracion("¡Hola mundo");
console.log(resultado);

function calcularEdadPerro(edadHumana) {
    let edadPerro = edadHumana * 7;
    return edadPerro;
}

let edadHumana = 5;
let edadPerro = calcularEdadPerro(edadHumana);
console.log(edadPerro);

function calcularValorHoraTrabajo(sueldoMensual) {
    let horasTrabajoMensual = 40;
    let valorHora = sueldoMensual / horasTrabajoMensual;
    return valorHora;
}

let sueldoMensual = 2000;
let valorHoraTrabajo = calcularValorHoraTrabajo(sueldoMensual);
console.log(valorHoraTrabajo);


function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

let peso = 70;
let altura = 1.75;

console.log(false||true)

let resultado = calcularIMC(peso, altura);
console.log("El IMC es: " + resultado.toFixed(2));


