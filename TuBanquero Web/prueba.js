var cuentas = [
    { nombre: "Mali", saldo: 200, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, password: 'l33t' },
    { nombre: "Maui", saldo: 67, password: '123' }
];

var indice;




var htmlInicio = '<div><button class="btn" onclick="login()">Iniciar sesión</button></div>'
var htmlbienvenida = '<p>&#xae;Tu Banquero</p>'
var htmltitulo = 'Bienvenido a tu cajero automatico'

document.getElementById('titulos').innerHTML = htmltitulo
document.getElementById("cajero").innerHTML = htmlInicio;
document.getElementById("texto").innerHTML = htmlbienvenida;

var HTMLoperaciones = '<div id="parrafo1"><p >Eliga la operacion a realizar:</p></div><div id="menu"><button type="button" class="btn" onclick="consultarDisponible()">Consultar Saldo</button><button type="button" class="btn" onclick="ingresar()">Ingresar Saldo</button><button type="button" class="btn" onclick="retirar()">Retirar Saldo</button><button class="btn" onclick="salir()">Salir</button></div>';




var volver = '<div id="volver"><button  type="button" class="btn" onclick="operaciones()">Volver</button></div>';



function operaciones() {

    document.getElementById("titulos").innerHTML = 'Operaciones de tu cajero'
    document.getElementById("cajero").innerHTML = HTMLoperaciones;
    document.getElementById("texto").innerHTML = "";
}

function login() {
    var nombreCuenta;
    for (var i = 0; i < cuentas.length; i++) {

        if (i === 0) {
            nombreCuenta = prompt("Ingrese su nombre de usuario:");
        }

        if (nombreCuenta === null) {
            break;
        }

        else if (nombreCuenta === cuentas[i].nombre) {
            // var indiceCuenta = i;
            var pwCuenta;

            pwCuenta = prompt('Accediendo a la cuenta de "' + cuentas[i].nombre + '". Ingrese su contraseña:');

            if (pwCuenta === null) {
                break;
            }

            else if (pwCuenta === cuentas[i].password) {
                indice = i
                operaciones();
            }

            else {
                alert("La contraseña no es correcta. Intente nuevamente.");
            }
            break;
        }
        else if (i === cuentas.length - 1) {
            alert("No se ha encontrado un usuario con este nombre. Intente nuevamente.");
        };

    };
};


function consultarDisponible() {

    var titulo = 'Consulta de saldo'
    var text = `Su saldo disponible en la cuenta  de ` + cuentas[indice].nombre + ` es de ` + cuentas[indice].saldo;
    document.getElementById("titulos").innerHTML = titulo
    document.getElementById("texto").innerHTML = text;
    document.getElementById("cajero").innerHTML = volver;
}

function ingresar() {
    
    var saldoActual = cuentas[indice].saldo;
    var monto = prompt("Monto a ingresar:");
    if (monto === null) {
        operaciones()
    }

    else if (monto <= 0 || isNaN(monto) === true) {
        alert("Monto no valido");
    }


    else {
        var nuevoSaldo = parseInt(monto) + parseInt(saldoActual);
        if (nuevoSaldo > 999) {
            alert("Su saldo actual es de $" + nuevoSaldo + " al ingresar " + monto + " se superaría el màximo permitido. La operacíon no es vàñida")
        }
        else {
            var titulo = '¡Depósito exitoso!'
            var text = "El monto ingresado es de $" + monto + " y su nuevo saldo es de $" + nuevoSaldo;

            document.getElementById("titulos").innerHTML = titulo
            document.getElementById("texto").innerHTML = text;
            document.getElementById("cajero").innerHTML = volver;
            cuentas[indice].saldo = nuevoSaldo
        }

    }

}

function retirar() {
    var saldoActual = cuentas[indice].saldo;

    var retiro = prompt("Digite el dinero que quiera retirar")

    if (retiro === null) {
        operaciones()
    }

    else if (retiro <= 0 || isNaN(retiro) === true) {
        alert("El monto ingresado no es válido");
    }


    else if (retiro > cuentas[indice].saldo) {
        alert("el monto ingresado es superior al de su cuenta de :" + cuentas[indice].saldo);
    }

    else {
        var nuevoSaldo = saldoActual - retiro;
        if (nuevoSaldo < 10) {
            alert("Su nuevo saldo sería menor a $10 , lo que no es permitifo.Por favor , ingrese un monto válido")
        }

        else {
            var titulo = '¡Retiro exitoso!'
            var text = "El monto retirado es " + retiro + ".Y su nuevo saldo es de: " + nuevoSaldo;

            document.getElementById("titulos").innerHTML = titulo
            document.getElementById("texto").innerHTML = text;
            document.getElementById("cajero").innerHTML = volver;
            cuentas[indice].saldo = nuevoSaldo


        }
    }
}
function salir() {

    document.getElementById("titulos").innerHTML = htmltitulo
    document.getElementById("cajero").innerHTML = htmlInicio;


}
