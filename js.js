/*
Arg:
-25.99
-18.20
-12.99
Ur:
-22.90
-16.03
-11.45
weight
Br:
-21.99
-15.40
-10.99
Pe:
-20.99
-14.69
-10.50
*/

class Pais{
    constructor(idPaisSeleccionado, precioFranja1,precioFranja2,precioFranja3){
        this.idPaisSeleccionado = idPaisSeleccionado;
        this.precioFranja1 = precioFranja1;
        this.precioFranja2 = precioFranja2;
        this.precioFranja3 = precioFranja3;    
}

}

// Crear objetos Pais y agregarlos al listado listaPaises;

let Uruguay = new Pais();
Uruguay.idPaisSeleccionado =  "ur";
Uruguay.precioFranja1 = 22.90;
Uruguay.precioFranja2 = 16.03;
Uruguay.precioFranja3 = 11.45;


let Argentina = new Pais();
Argentina.idPaisSeleccionado =  "ar";
Argentina.precioFranja1 = 25.99;
Argentina.precioFranja2 = 18.20;
Argentina.precioFranja3 = 12.99;

let Brasil = new Pais();
Brasil.paisSeleccionado = "br";
Brasil.precioFranja1 = 21.99;
Brasil.precioFranja2 = 15.40;
Brasil.precioFranja3 = 10.99;

function calcularPrecioAbonadoPorCliente(pesoAbonadoCliente,paisSeleccionado){
    let precioKilo;
    pesoAbonadoCliente = Number($("#txtPayByClient").val());
    paisSeleccionado = $("#slcCountrySelector").val();
    if(paisSeleccionado === "ar"){
        if(pesoAbonadoCliente > 0 && pesoAbonadoCliente <= 3){
            precioKilo =  Math.round(pesoAbonadoCliente * Argentina.precioFranja1);
        }
        if(pesoAbonadoCliente >= 3.01 && pesoAbonadoCliente <= 5){
            precioKilo = Math.round(Argentina.precioFranja1 * 3 +  (pesoAbonadoCliente - 3) * Argentina.precioFranja2);
        }
        if(pesoAbonadoCliente > 5.01){
            precioKilo = Math.round(Argentina.precioFranja1 * 3 + Argentina.precioFranja2 * 2 + pesoAbonadoCliente * Argentina.precioFranja3);
        }
    }
    if(paisSeleccionado === "ur"){
        if(pesoAbonadoCliente > 0 && pesoAbonadoCliente <= 3){
            precioKilo =  Math.round(pesoAbonadoCliente * Uruguay.precioFranja1);
        }
        if(pesoAbonadoCliente > 3.01 && pesoAbonadoCliente <= 5){
            precioKilo = Math.round(Uruguay.precioFranja1 * 3 +   (pesoAbonadoCliente - 3) * Uruguay.precioFranja2);
        }
        if(pesoAbonadoCliente > 5.01){
            precioKilo = Math.round(Uruguay.precioFranja1 * 3 + Uruguay.precioFranja2 * 2 + (pesoAbonadoCliente - 5) * Uruguay.precioFranja3);
        }
    }

    return precioKilo;
}

function calcularPrecioRealDelProducto(pesoRealProducto,paisSeleccionado){
    let precioKilo;
    pesoAbonadoCliente = Number($("#txtPayByClient").val());
    pesoRealProducto = Number($("#txtRealW").val());
    paisSeleccionado = $("#slcCountrySelector").val();
    if(paisSeleccionado === "ar"){
        if(pesoRealProducto > 0 && pesoRealProducto <= 3){
            precioKilo =  Math.round(pesoRealProducto * Argentina.precioFranja1);
        }
        if(pesoRealProducto > 3.01 && pesoRealProducto <= 5){
            precioKilo = Math.round(Argentina.precioFranja1 * 3 +  (pesoRealProducto - 3) * Argentina.precioFranja2);
        }
        if(pesoRealProducto > 5.01){
            precioKilo = Math.round(Argentina.precioFranja1 * 3 + Argentina.precioFranja2 * 2 + (pesoRealProducto - 5) * Argentina.precioFranja3);
        }
    }
    if(paisSeleccionado === "ur"){
        if(pesoRealProducto > 0 && pesoRealProducto <= 3){
            precioKilo =  Math.round(pesoRealProducto * Uruguay.precioFranja1);
        }
        if(pesoRealProducto > 3.01 && pesoRealProducto <= 5){
            precioKilo = Math.round((Uruguay.precioFranja1 * 3) +  (pesoRealProducto - 3) * Uruguay.precioFranja2);
        }
        if(pesoRealProducto > 5.01){
            precioKilo = Math.round(Uruguay.precioFranja1 * 3 + Uruguay.precioFranja2 * 2 + (pesoRealProducto - 5) * Uruguay.precioFranja3);
        }
    }

    return precioKilo;
}

$("#btnCalculateWhDifference").click(calculoFinal);

function calculoFinal(){
    let a =  Number($("#txtPayByClient").val());
    let b = Number($("#txtRealW").val());
    let c = $("#slcCountrySelector").val();
    let d = $("#txtNumeroOrden").val();
    let tempAbonadoClente = calcularPrecioAbonadoPorCliente(a,b);
    let tempPesoReal = calcularPrecioRealDelProducto(c,b);
    let tempFinal;
    console.log("abonado cliente : " + tempAbonadoClente);
    console.log("peso real : " + tempPesoReal);
    tempFinal = tempPesoReal - tempAbonadoClente;
    $("#pMensajes").html(`<h3>Cliente debe abonar: </h3> ${tempFinal} USD<br>
    <h3>Link de pago : </h3>
    https://tiendamia.com/crear-link-ap?oid=${d}&m=${tempFinal}
    `);
}


