"use strict";
var form = document.getElementById("formulario");
/*Barra de nivel de conocimiento*/
var nivel = document.getElementById("nivel");
var change = document.getElementById("cambio");
change.innerHTML = nivel.value;
nivel.oninput = function () {
    change.innerHTML = this.value;
};
/* Mensaje de nueva ventana despues de submit*/
var checkboxes = document.getElementById("lenguaje");
var mensaje = document.getElementById("mensaje");
form.addEventListener("submit", function (event) {
    form.style.display = "none";
    mensaje.style.display = "block"; /*muestra mensaje*/
    mensaje.innerHTML = "Hemos recibido sus datos, pronto nos estaremos comunicando con usted";
    event.preventDefault();
});
/*  Comprueba campos Checkbox al menos uno, rut en correcto formato */
function doSubmit() {
    if (!validarRut()) {
        alert("Formato de RUT debe ser xxxxxxxx-x sin puntos");
        return false;
    }
    if (!valCheckbox()) {
        alert("Seleccione al menos una opcion en campo lenguajes de interes");
        return false;
    }
    return true;
}
/*let list:any =  checkboxes?.getElementsByTagName("input");
 for(let i=0; i<checkboxes.length; i++){
     let bandera:boolean =checkboxes[i].checked;
     if(bandera == true){
         console.log("YEY");
     }else{
         console.log("nope");
     }
 }
 }); */
/*Validar que tenga 9 digitos y tenga un 9 al inicio*/
function validNumber() {
    var fono = form.elements["telefonoMovil"].value;
    var numString = fono.toString();
    if (numString.length != 9) {
        alert("El numero debe tener 9 digitos, sin simbolos");
    }
    if (fono[0] != 9) {
        alert("Telefono debe comenzar con 9");
    }
}
function validarRut() {
    var isValid = true;
    var rut = form.elements["rut"].value;
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rut)) {
        isValid = false;
    }
    if (isValid) {
        return true;
    }
    else {
        return false;
    }
}
function valCheckbox() {
    var verificar1 = document.getElementById("python");
    var verificar2 = document.getElementById("typescript");
    var verificar3 = document.getElementById("php");
    var verificar4 = document.getElementById("java");
    var verificar5 = document.getElementById("c++");
    var verificar6 = document.getElementById("c#");
    if (verificar1.checked) {
        console.log("OK");
        return true;
    }
    else {
        if (verificar2.checked) {
            return true;
        }
        else {
            if (verificar3.checked) {
                return true;
            }
            else {
                if (verificar4.checked) {
                    return true;
                }
                else {
                    if (verificar5.checked) {
                        return true;
                    }
                    else {
                        if (verificar6.checked) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
            }
        }
    }
}
function limpiarDatos() {
    form.reset();
}
