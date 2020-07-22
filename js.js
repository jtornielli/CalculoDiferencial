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
*/

class Pais{
    constructor(idPaisSeleccionado, precioFranja1,precioFranja2,precioFranja3){
        this.idPaisSeleccionado = idPaisSeleccionado;
        this.precioFranja1 = precioFranja1;
        this.precioFranja2 = precioFranja2;
        this.precioFranja3 = precioFranja3;    
}

}

let listaPaises = [];

// Crear objetos Pais y agregarlos al listado listaPaises;

let Uruguay = new Pais();
Uruguay.idPaisSeleccionado =  "ur";
Uruguay.precioFranja1 = 22.90;
Uruguay.precioFranja2 = 16.03;
Uruguay.precioFranja3 = 11.45;
listaPaises.push(Uruguay);

let Argentina = new Pais();
Argentina.idPaisSeleccionado =  "ar";
Argentina.precioFranja1 = 25.99;
Argentina.precioFranja2 = 18.20;
Argentina.precioFranja3 = 12.99;
listaPaises.push(Argentina);


function calcularPrecioAbonadoPorCliente(pesoAbonadoCliente,paisSeleccionado){
    let precioKilo;
    pesoAbonadoCliente = Number($("#txtPayByClient").val());
    paisSeleccionado = $("#slcCountrySelector").val();
    if(paisSeleccionado === "ar"){
        if(pesoAbonadoCliente > 0 && pesoAbonadoCliente <= 3){
            precioKilo =  Math.round(pesoAbonadoCliente * Argentina.precioFranja1);
        }
        if(pesoAbonadoCliente > 3.1 && pesoAbonadoCliente <= 5){
            precioKilo = Math.round(Argentina.precioFranja1 * 3 +  pesoAbonadoCliente * Argentina.precioFranja2);
        }
        if(pesoAbonadoCliente > 5.1){
            precioKilo = Math.round(Argentina.precioFranja1 * 3 + Argentina.precioFranja2 * 2 + pesoAbonadoCliente * Argentina.precioFranja3);
        }
    }
    if(paisSeleccionado === "ur"){
        if(pesoAbonadoCliente > 0 && pesoAbonadoCliente <= 3){
            precioKilo =  Math.round(pesoAbonadoCliente * Uruguay.precioFranja1);
        }
        if(pesoAbonadoCliente > 3.1 && pesoAbonadoCliente <= 5){
            precioKilo = Math.round(Uruguay.precioFranja1 * 3 +   pesoAbonadoCliente * Uruguay.precioFranja2);
        }
        if(pesoAbonadoCliente > 5.1){
            precioKilo = Math.round(Uruguay.precioFranja1 * 3 + Uruguay.precioFranja2 * 2 + pesoAbonadoCliente * Uruguay.precioFranja3);
        }
    }

    return precioKilo;
}

function calcularPrecioRealDelProducto(pesoRealProducto,paisSeleccionado){
    let precioKilo;
    pesoRealProducto = Number($("#txtRealW").val());
    paisSeleccionado = $("#slcCountrySelector").val();
    if(paisSeleccionado === "ar"){
        if(pesoRealProducto > 0 && pesoRealProducto <= 3){
            precioKilo =  Math.round(pesoRealProducto * Argentina.precioFranja1);
        }
        if(pesoRealProducto > 3.1 && pesoRealProducto <= 5){
            precioKilo = Math.round(Argentina.precioFranja1 * 3 +  (pesoRealProducto - 3) * Argentina.precioFranja2);
        }
        if(pesoRealProducto > 5.1){
            precioKilo = Math.round(Argentina.precioFranja1 * 3 + Argentina.precioFranja2 * 2 + (pesoRealProducto - 5) * Argentina.precioFranja3);
        }
    }
    if(paisSeleccionado === "ur"){
        if(pesoRealProducto > 0 && pesoRealProducto <= 3){
            precioKilo =  Math.round(pesoRealProducto * Uruguay.precioFranja1);
        }
        if(pesoRealProducto > 3.1 && pesoRealProducto <= 5){
            precioKilo = Math.round(Uruguay.precioFranja1 * 3 +   (pesoRealProducto - 3) * Uruguay.precioFranja2);
        }
        if(pesoRealProducto > 5.1){
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
    console.log(tempAbonadoClente);
    console.log(tempPesoReal);
    tempFinal = tempPesoReal - tempAbonadoClente;
    $("#pMensajes").html(`<h3>Cliente debe abonar: </h3> ${tempFinal} USD<br>
    <h3>Link de pago : </h3>
    https://tiendamia.com/crear-link-ap?oid=${d}&m=${tempFinal}
    `);
}


