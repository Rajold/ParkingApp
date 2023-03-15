


document.getElementById("montos").style.display = "none";
document.getElementById("btnPrint").style.display = "none";
document.getElementById("propietario").style.display = "none";
document.getElementById("modelo").style.display = "none";

function calcular() { 
    horas = Number(document.getElementById("salida").value);
    tipo = (document.getElementById("tipo").value).toLowerCase();

    valor= valorService(horas);
    descuento = porcentaje(tipo, valor);
    total= valor- descuento;
    reloj= time()
  
    document.getElementById("valor").value = valor;
    document.getElementById("descuento").value = descuento;
    document.getElementById("total").value = total;
    document.getElementById("watch").value = reloj;

    document.getElementById("montos").style.display = "block";
    document.getElementById("btnPrint").style.display = "block";
    //document.getElementById("propietario").style.display = "block";
    //document.getElementById("modelo").style.display = "block";
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
        case "bicicleta":
            descuento = valor * 0.20;
            break;
        default:
            break;
    }
    return descuento;
}

function time(){
  tiempoActual= new Date();
  day= tiempoActual.getDay();
  month= tiempoActual.getMonth();
  year= tiempoActual.getFullYear();
  hour= tiempoActual.getHours();
  minute= tiempoActual.getMinutes();
  second= tiempoActual.getSeconds();
  
    showDate= day + "/" + month + "/" + year;
    //alert(tiempoActual);
    //alert(showDate);
    //alert(day);
  showTime= hour + ":" + minute + ":" + second;

  return showTime;
}

function ingreso(){
    reloj= time()
    document.getElementById("inTime").value = reloj;
}