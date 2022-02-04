function validaciones() {

    let edad;

    edad = document.getElementById("edad").value;
    validarEdad(edad);
    return true;
}

function validarEdad(edad) {
    console.log("la edad es:" + edad);
    if (edad < 18) {
        return false;
    }
    return true;
}