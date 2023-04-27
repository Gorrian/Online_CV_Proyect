let NombreVal = false;


$(document).ready(function () {
    $("#Nombre").blur(function () {
        if ($("#Nombre").val().length > 2) {
            NombreVal = true;
            $("#WarnNombre").text("");
            $("#Nombre").removeClass("border-danger");
            $("#Nombre").addClass("border-success");
        } else {
            NombreVal = false;
            $("#WarnNombre").text("El campo es obligatorio y debe contener mas de 2 caracteres");
            $("#Nombre").addClass("border-danger");
            $("#Nombre").removeClass("border-success");
        }
    });

    $("#Email").blur(function () {
        if ($("#Email").val().length > 0) {
            var Regex = /^[\w|0-9]+([\.\+\-]?\w+)*@[\w|0-9]+([\.-]?\w+)*(\.\w{2,4})+$/
            if (Regex.test($("#Email").val())) {
                $("#WarnEmail").text("");
                $("#Email").removeClass("border-danger");
                $("#Email").addClass("border-success");
            } else {
                $("#WarnEmail").text("El valor introducido no es un correo valido");
                $("#Email").addClass("border-danger");
                $("#Email").removeClass("border-success");
            }
        } else {
            $("#WarnEmail").text("El campo es obligatorio y no puede estar vacio");
            $("#Email").addClass("border-danger");
            $("#Email").removeClass("border-success");
        }
    });

    $("#Telefono").blur(function () { 
        
        if ($("#Telefono").val().length > 0) {
            var Regex=/^[6|9]\d{8}/
            if(Regex.test($("#Telefono").val())){
                $("#WarnTelofono").text("");
                $("#Telefono").removeClass("border-danger");
                $("#Telefono").addClass("border-success");
            }else{
                $("#WarnTelefono").text("El valor introducido no es un telefono valido");
                $("#Telefono").addClass("border-danger");
                $("#Telefono").removeClass("border-success");
            }
        } else {
            $("#WarnTelefono").text("El campo es obligatorio y no puede estar vacio");
            $("#Telefono").addClass("border-danger");
            $("#Telefono").removeClass("border-success");
        }
    });
});

function Validar() {
    let Validado = false;
    return Validado;
}