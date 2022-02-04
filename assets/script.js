function validaciones() {
    let nombres, apellidos, nidentifica, genero, edad, celular, celularemer, tidentifica, respuesta, tsangre;
    /*valida campos vacios*/
    nombres = document.getElementById("nombres").value;
    apellidos = document.getElementById("apellidos").value;
    tidentifica = document.getElementById("sidentificacion").value;
    nidentifica = document.getElementById("nidentificacion").value;
    tsangre = document.getElementById("stiposangre").value;
    genero = document.getElementById("sgenero").value;
    edad = document.getElementById("edad").value;
    celular = document.getElementById("celular").value;
    celularemer = document.getElementById("celularemergencia").value;

    respuesta = validaVacios(nombres, apellidos, tidentifica, nidentifica, tsangre, genero, edad, celular, celularemer);
    if (!respuesta) {
        Swal.fire('Debe ingresar todos los datos')
        return false;
    }
    /*valida la edad*/
    respuesta = validarEdad(edad);
    if (!respuesta) {
        Swal.fire('Solo se permite el ingreso a mayores de edad');
        return false;
    }
    /*valida dia de damas*/
    const fecha = new Date();
    const numeroDia = new Date(fecha).getDay();
    console.log("el dia es:" + numeroDia);
    if (numeroDia === 4 && genero === "M") {
        Swal.fire('Hoy es dia de damas, no pueden ingresar caballeros');
        return false;
    }
    if (numeroDia === 5 && genero === "F") {
        Swal.fire('Hoy es dia de caballeros, no pueden ingresar damas');
        return false;
    }
    Swal.fire('Bienvenid@ ' + nombres + " " + apellidos + ", puedes ingresar!!!");
    return true;
}
function validaVacios(nombres, apellidos, tidentifica, nidentifica, tsangre, genero, edad, celular, celularemer) {
    console.log(nombres + "-" + apellidos + "-" + tidentifica + "-" + nidentifica + "-" + tsangre + "-" +
        "-" + genero + "-" + edad + "-" + celular + "-" + celularemer);
    if (!nombres || !apellidos || !tidentifica || !nidentifica || !tsangre || !genero || !edad || !celular || !celularemer) {
        console.log("hay campos vacios");
        return false;
    }
    return true;
}
function validarEdad(edad) {
    console.log("la edad es:" + edad);
    if (edad < 18) {
        return false;
    }
    return true;
}