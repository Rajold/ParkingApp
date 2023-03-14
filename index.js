let valorHora;
let tipoVeih;
let horas;
let descuento;
let valorInicial;
let valorFinal;


//document.getElementById("montos").style.display = "none";
document.getElementById("btnPrint").style.display = "none";

function calcular() { 
    horas = Number(document.getElementById("fin").value);
    tipo = (document.getElementById("tipo").value).tolowerCase();
    

    valor = valorService(horas);
    descuento = porcentaje(tipo, valor);
    valorFinal= valor- descuento;

    document.getElementById("valor").value = valor;
    document.getElementById("descuento").value = descuento;
    document.getElementById("total").valor = valorFinal;

    document.getElement("montos").style.display = "block";
    document.getElement("btnPrint").style.display= "block";
}

function valorService(hours) {
    if (hours > 0 && hours <= 2) {
        valorHora = 5000;
        valorInicial = (hours * valorHora);
    } else if (hours >= 3 && hours <= 5) {
        valorHora = 4000;
        valorInicial = (2 * 5000) + ((hours - 2) * valorHora);
    } else if (hours > 5 && hours <= 10) {
        valorHora = 3000;
        valorInicial = (2 * 5000) + (3 * 4000) + ((hours - 5) * valorHora);
    } else if (hours > 10) {
        valorHora = 2000;
        valorInicial = (2 * 5000) + (3 * 4000) + (5 * 3000) + ((hours - 10) * valorHora);
    }

    return valorInicial;
}

function porcentaje(tipo, valor) {
    switch (tipo) {
        case "carro":
            descuento = valor * 0.10;
            break;
        case "moto":
            descuento = valor * 0.15;
            break;
        default:
            break;
    }
    return descuento;
}