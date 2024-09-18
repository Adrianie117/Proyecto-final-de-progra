function limpiarResultado() {
    document.getElementById("resultado1").textContent = "";
    document.getElementById("resultado2").textContent = "";
    document.getElementById("resultado3").textContent = "";
    document.getElementById("resultado4").textContent = "";
    document.getElementById("resultado5").textContent = "";
    document.getElementById("resultado6").textContent = "";
    document.getElementById("resultado7").textContent = "";
    document.getElementById("resultado8").textContent = "";
    document.getElementById("resultado9").textContent = "";
    document.getElementById("resultado10").textContent = "";
    document.getElementById("resultado11").textContent = "";
    document.getElementById("resultado12").textContent = "";
    document.getElementById("resultado13").textContent = "";
    document.getElementById("resultado14").textContent = "";
    document.getElementById("resultado15").textContent = "";
}

function ejercicio1(event) {
    event.preventDefault(); 
    limpiarResultado();
    let nota = parseFloat(prompt("Ingrese su nota para el ejercicio 1"));
    let resultado1 = "";
    if (nota < 75) {
        resultado1 = "Usted Necesita Mejorar";
    } else if (nota < 80) {
        resultado1 = "Bueno";
    } else if (nota < 91) {
        resultado1 = "Muy Bueno";
    } else if (nota <= 100) {
        resultado1 = "Usted está en Excelencia Académica";
    } else {
        resultado1 = "Ingrese un valor válido";
    }
    document.getElementById("resultado1").textContent = resultado1;
}

function ejercicio2(event) {
    event.preventDefault();
    limpiarResultado();
    const nota1 = 98;
    const nota2 = 88;
    const nota3 = 94;
    const nota4 = 90;
    const promedio = Math.round((nota1 + nota2 + nota3 + nota4) / 4);
    let resultado2 = "El promedio de las 4 notas es de: " + promedio;
    document.getElementById("resultado2").textContent = resultado2;
}

function ejercicio3(event) {
    event.preventDefault();
    limpiarResultado();
    let base = 2;
    let altura = 4;
    let area = (base * altura) / 2;
    let resultado3 = "El área del triángulo es: " + area;
    document.getElementById("resultado3").textContent = resultado3;
}


function ejercicio4(event) {
    event.preventDefault();
    limpiarResultado();
    let lado1 = 4;
    let lado2 = 4;
    let area = lado1 * lado2;
    let resultado4 = "El área del cuadrado es: " + area;
    document.getElementById("resultado4").textContent = resultado4;
}

function ejercicio5(event) {
    event.preventDefault();
    limpiarResultado();
    const tasaCambio = 24;
    const dolares = 1500;
    const convertir = dolares * tasaCambio;
    const resultado5 = dolares + " dólares son " + convertir + " lempiras";
    document.getElementById("resultado5").textContent = resultado5;
}


function ejercicio6(event) {
    event.preventDefault();
    limpiarResultado();
    let suma = 0;
    let i = 1;
    
    while (i <= 100){
        suma = suma + i;
        i++;
    }
    let resultado6 = ("El resultado de la suma de los numero del 1 al 100 es: " + suma);
    document.getElementById("resultado6").textContent = resultado6;
}


function ejercicio7(event) {
    event.preventDefault();
    limpiarResultado();
    let lempiras = 8560;
    let tasaCambio = 24;
    let convertir = lempiras / tasaCambio;
    let resultado7 = lempiras + " lempiras son " + convertir.toFixed(2) + " dólares";
    document.getElementById("resultado7").textContent = resultado7;
}

function ejercicio8(event) {
    event.preventDefault();
    limpiarResultado();
    let C = 40;
    let F = (C * 9/5) + 32;
    let resultado8 = C + " grados Celsius son " + F + " grados Fahrenheit";
    document.getElementById("resultado8").textContent = resultado8;
}

function ejercicio9(event) {
    event.preventDefault();
    limpiarResultado();
    let radio = 10;
    let area = Math.PI * (radio * radio);
    let resultado9 = "El área de un círculo con un radio de " + radio + " es igual a " + area;
    document.getElementById("resultado9").textContent = resultado9;
}

function ejercicio10(event) {
    event.preventDefault();
    limpiarResultado();
    let edad = parseFloat(prompt("Ingrese su Edad"));
    
    if(edad >= 18){
        let sn = prompt("Usted Tiene Licencia?");
        
        if( sn === "si"){
            resultado10 = ("Ya que usted tiene la edad adecuada y tiene licencia usted esta autorizado para conducir");
        }
        else{
            resultado10 = ("Ya que usted tiene la edad adecuada pero no licencia usted no esta autorizado para conducir ");
        }
    }
    else if(edad <= 17){
        resultado10 = ("Disculpe pero usted no tiene la edad suficiente para tener licencia y peor para estar autorizado aconducir")
    }
    else{
        resultado10 = ("Ingrese un valor adecuado");
}
    document.getElementById("resultado10").textContent = resultado10;
}

function ejercicio11(event) {
    event.preventDefault();
    limpiarResultado();
    let edad = parseFloat(prompt("Ingrese su edad"));
    let resultado11 = "";
    if (edad >= 18) {
        resultado11 = "Usted es mayor de edad";
    } else if (edad <= 17) {
        resultado11 = "Usted es menor de edad";
    } else {
        resultado11 = "Ingrese un valor válido";
    }
    document.getElementById("resultado11").textContent = resultado11;
}

function ejercicio12(event) {
    event.preventDefault();
    limpiarResultado();
    let cantidad = parseFloat(prompt("Ingrese la cantidad a convertir: "));
    let unidad = prompt("Ingrese la unidad que desea convertir (m para metros, cm para centímetros)");
    let resultado12 = "";
    if (unidad === "m") {
        let cm = cantidad * 100;
        resultado12 = `${cantidad} metros equivalen a ${cm} centímetros`;
    } else if (unidad === "cm") {
        let m = cantidad / 100;
        resultado12 = `${cantidad} centímetros equivalen a ${m} metros`;
    } else {
        mensaje = "Unidad de medida no válida";
    }
    document.getElementById("resultado12").textContent = resultado12;
}

function ejercicio13(event) {
    event.preventDefault();
    limpiarResultado();
    let nombre = prompt("Ingrese su nombre");
    let asistencia = parseFloat(prompt("Ingrese su cantidad de asistencias"));
    let resultado13 = "";
    if (asistencia >= 35) {
        resultado13 = nombre + " usted es un estudiante de categoría A";
    } else if (asistencia > 21 && asistencia < 35) {
        resultado13 = nombre + " usted es un estudiante de categoría B";
    } else if (asistencia >= 0 && asistencia < 21) {
        resultado13 = nombre + " usted es un estudiante de categoría C";
    } else {
        resultado13 = "Unidad no válida";
    }
    document.getElementById("resultado13").textContent = resultado13;
}

function ejercicio14(event) {
    event.preventDefault();
    limpiarResultado();
    let precio = parseFloat(prompt("Ingrese el precio del ticket"));
    let edad = parseFloat(prompt("Ingrese su edad para saber si tiene descuento"));
    let resultado14 = "";

    if (edad <= 12) {
        let cantidad = precio * 0.40;
        let descuento = precio - cantidad;
        resultado14 = "Ya que usted tiene menos de 12 obtiene un descuento del 40%, por lo tanto solo debe pagar " + descuento + "$";
    } else if (edad <= 21) {
        let estudiante = prompt("¿Usted es un estudiante? (si/no)").toLowerCase();
        if (estudiante === "si") {
            let canti = precio * 0.30;
            let des = precio - canti;
            resultado14 = "Ya que usted tiene más de 13 y menos de 21 y es estudiante, obtiene un descuento del 30%, por lo tanto solo debe pagar " + des + "$";
        } else {
            resultado14 = "Lo siento, pero usted no es estudiante, por lo tanto no puede obtener este descuento. Debe pagar el precio normal que es de " + precio + "$";
        }
    } else if (edad >= 60) {
        let cantid = precio * 0.60;
        let descu = precio - cantid;
        resultado14 = "Ya que usted tiene más de 60, obtiene un descuento del 60%, por lo tanto solo debe pagar " + descu + "$";
    } else {
        resultado14 = "Si usted no tiene menos de 21 o más de 60, no obtiene ningún descuento, por lo tanto debe pagar el ticket completo que sería " + precio + "$";
    }

    document.getElementById("resultado14").textContent = resultado14;
}

function ejercicio15(event) {
    event.preventDefault();
    limpiarResultado();
    let base = 2;
    let altura = 4;
    let perimetro = 2 * (base + altura);
    let resultado15 = "El perímetro del rectángulo es: " + perimetro;
    document.getElementById("resultado15").textContent = resultado15;
}