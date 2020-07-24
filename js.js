

/*
Arg:
-25.99
-18.20
-12.99
Ur:
-20.99
-16.03
-11.45
Br:
-21.99
-15.40
-10.99
Pe:
-20.99
-14.69
-10.50
*/

class Pais {
    constructor(idPaisSeleccionado, precioFranja1, precioFranja2, precioFranja3) {
        this.idPaisSeleccionado = idPaisSeleccionado;
        this.precioFranja1 = precioFranja1;
        this.precioFranja2 = precioFranja2;
        this.precioFranja3 = precioFranja3;
    }
}

// Crear objetos Pais
let Uruguay = new Pais("ur", 20.99, 14.69, 10.50);
let Argentina = new Pais("ar", 25.99, 18.20, 12.99);
let Brasil = new Pais("br", 21.99, 15.40, 10.99);
let Peru = new Pais("pe", 20.99, 14.69, 10.50)

function obtenerPais() {
    let paisSeleccionado = $("#slcCountrySelector").val();
    if (paisSeleccionado == "ar") {
        return Argentina
    } else if (paisSeleccionado == "ur") {
        return Uruguay
    } else if (paisSeleccionado == "br") {
        return Brasil
    } else if (paisSeleccionado == "pe") {
        return Peru
    }
}

function obtenerFranja(franja) {
    if (franja == 1) {
        return obtenerPais().precioFranja1
    } else if (franja == 2) {
        return obtenerPais().precioFranja2
    } else if (franja == 3) {
        return obtenerPais().precioFranja3
    }
}

function calcularPrecio(abonadoPorCliente) {
    let precioKilo;
    let pesoAbonadoCliente = Number($("#txtPayByClient").val());
    let pesoRealProducto = Number($("#txtRealW").val());

    let peso = abonadoPorCliente ? pesoAbonadoCliente : pesoRealProducto

    if (pesoAbonadoCliente > 0 && pesoAbonadoCliente <= 3) {
        precioKilo = Math.round(peso * obtenerFranja(1));
    }
    if (pesoAbonadoCliente >= 3.01 && peso <= 5) {
        precioKilo = Math.round(obtenerFranja(1) * 3 + (peso - 3) * obtenerFranja(2));
    }
    if (pesoAbonadoCliente > 5.01) {
        precioKilo = Math.round(obtenerFranja(1) * 3 + obtenerFranja(2) * 2 + (peso - 5) * obtenerFranja(3));
    }
    return precioKilo;
}

$("#btnCalculateWhDifference").click(calculoFinal);

function calculoFinal() {
    let numeroOrden = $("#txtNumeroOrden").val();
    let precioAbonadoCliente = calcularPrecio(true);
    let precioPesoReal = calcularPrecio(false);
    
    console.log("abonado cliente : " + precioAbonadoCliente);
    console.log("peso real : " + precioPesoReal);
    let diferenciaPrecio = precioPesoReal - precioAbonadoCliente;

    $("#pMensajes").html(`<h3>Cliente debe abonar: </h3> ${diferenciaPrecio} USD<br>
    <h3>Link de pago : </h3>
    https://tiendamia.com/crear-link-ap?oid=${numeroOrden}&m=${diferenciaPrecio}
    `);
}