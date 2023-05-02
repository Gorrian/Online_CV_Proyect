$(document).ready(function () {
    $("#Nombre").blur(ValidarNombre);

    $("#Email").blur(ValidarEmail);

    $("#Telefono").blur(ValidarTelefono);

    $("#Fecha").blur(ValidarFecha);

    $("#Asunto").blur(ValidarAsunto);

    /**
     * Algunos mensajes no proporciona un mensaje de error hasta
     * que el usuario intenta enviarlo, algo que tiene sentido en
     * checkmarks y en captchas el ultimo el cual seria mejor no decirle
     * que esta bien o mal hasta que lo intenta enviar pero al darle
     * una funcion con un parametro a {Jqblur} por algun motivo el evento
     * no se creaba, jquery simplemente ejecutaria directamente la funcion
     * al toparse con la linea que indica que crease un evento y que si ese
     * evento ocurria ejecutara la funcion proporcionando el parametro.
     * Una solucion que funciona es llamar la funcion dentro de una funcion
     * ambigua que el evento ejecuta al saltar.
     */

    $("#ContactMethod0").blur(function (){
        ClearWarnMessege("ContactMethod");
    });

    $("#ContactMethod1").blur(function(){
        ClearWarnMessege("ContactMethod")
    });

    $("#GDPR").blur(function(){
        ClearWarnMessege("GDPR");
    });

    $("#Captcha").blur(function (){
        ClearWarnMessege("Captcha")
    });
});

function ClearWarnMessege(id){
        console.log(id);
        $("#Warn"+id).text("");
        $("#"+id).removeClass("border-danger");
        $("#"+id).removeClass("border");
}

function ValidarNombre() {
    if ($("#Nombre").val().length > 2) {
        
        $("#WarnNombre").text("");
        $("#Nombre").removeClass("border-danger");
        $("#Nombre").addClass("border-success");
        return true;
    } else {
        $("#WarnNombre").text("El campo es obligatorio y debe contener mas de 2 caracteres");
        $("#Nombre").addClass("border-danger");
        $("#Nombre").removeClass("border-success");
        return false;
    }
}

function ValidarEmail() {
    if ($("#Email").val().length > 0) {
        let Regex = /^[\w|0-9]+([\.\+\-]?\w+)*@[\w|0-9]+([\.-]?\w+)*(\.\w{2,4})+$/
        if (Regex.test($("#Email").val())) {
            
            $("#WarnEmail").text("");
            $("#Email").removeClass("border-danger");
            $("#Email").addClass("border-success");
            return true;
        } else {
            
            $("#WarnEmail").text("El valor introducido no es un correo valido");
            $("#Email").addClass("border-danger");
            $("#Email").removeClass("border-success");
            return false;
        }
    } else {
        
        $("#WarnEmail").text("El campo es obligatorio y no puede estar vacio");
        $("#Email").addClass("border-danger");
        $("#Email").removeClass("border-success");
        return false;
    }
}

function ValidarTelefono() {
    if ($("#Telefono").val().length > 0) {
        let Regex = /^[6|9]\d{8}/
        if (Regex.test($("#Telefono").val())) {
            $("#WarnTelefono").text("");
            $("#Telefono").removeClass("border-danger");
            $("#Telefono").addClass("border-success");
            return true;
        } else {
            $("#WarnTelefono").text("El valor introducido no es un telefono valido");
            $("#Telefono").addClass("border-danger");
            $("#Telefono").removeClass("border-success");
            return false;
        }
    } else {
        $("#WarnTelefono").text("El campo es obligatorio y no puede estar vacio");
        $("#Telefono").addClass("border-danger");
        $("#Telefono").removeClass("border-success");
        return false;
    }
}

function ValidarFecha() {
    if ($("#Fecha").val().length > 0) {
        let Regex = /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/gm
        if (Regex.test($("#Fecha").val())) {
            /*let TodayDate=new Date();
            let SelectedDate=new Date($("#Fecha").val());
            if()*/
            $("#WarnFecha").text("");
            $("#Fecha").removeClass("border-danger");
            $("#Fecha").addClass("border-success");
            return true;
        } else {
            $("#WarnFecha").text("El valor introducido sorprendentemente no es una fecha valida");
            $("#Fecha").addClass("border-danger");
            $("#Fecha").removeClass("border-success");
            return false;
        }
    } else {
        $("#WarnFecha").text("El campo es obligatorio y no puede estar vacio");
        $("#Fecha").addClass("border-danger");
        $("#Fecha").removeClass("border-success");
        return false;
    }
}

function ValidarAsunto() {
    if ($("#Asunto").val().length > 0) {
        $("#WarnAsunto").text("");
        $("#Asunto").removeClass("border-danger");
        $("#Asunto").addClass("border-success");
        return true;
    } else {
        $("#WarnAsunto").text("El campo es obligatorio y no puede estar vacio");
        $("#Asunto").addClass("border-danger");
        $("#Asunto").removeClass("border-success");
        return false;
    }
}

function ValidarContactMethod() {
    if ($("#ContactMethod0").is(":checked") == false && $("#ContactMethod1").is(":checked") == false) {
        $("#WarnContactMethod").text("Necesito al menos un metodo de contacto");
        $("#ContactMethod").addClass("border-danger border");
        return false
    } else {
        $("#WarnContactMethod").text("");
        $("#ContactMethod").removeClass("border-danger border");
        return true
    }
}

function ValidarGDPR() {
    if ($("#GDPR").is(":checked") == true) {
        $("#GDPR").removeClass("border-danger");
        $("#WarnGDPR").text("");
        return true
    } else {
        $("#GDPR").addClass("border-danger");
        $("#WarnGDPR").text("Debe confirmar que esta conforme con la ley de proteccion de datos");
        return false
    }
}

function ValidarCaptcha() {
    if ($("#Captcha").val() == "") {
        $("#WarnCaptcha").text("Es necesario que haga el Captcha");
        $("#Captcha").addClass("border-danger");
        $("#Captcha").removeClass("border-success");
        return false;
    } else {
        if ($("#Captcha").val() == CaptchaAnswer) {
            $("#WarnCaptcha").text("");
            $("#Captcha").removeClass("border-danger");
            $("#Captcha").addClass("border-success");
            return true;
        } else {
            $("#WarnCaptcha").text("El captcha introducido es incorrecto");
            $("#Captcha").addClass("border-danger");
            $("#Captcha").removeClass("border-success");
            return false;
        }
    }

}

function Validar() {

    let Validado = true;
    if (ValidarNombre() == false) {
        Validado = false;
    }
    if (ValidarEmail() == false) {
        Validado == false;
    }
    if (ValidarTelefono() == false) {
        Validado == false;
    }
    if (ValidarFecha() == false) {
        Validado == false;
    }
    if (ValidarAsunto() == false) {
        Validado == false;
    }
    if (ValidarCaptcha() == false) {
        Validado = false;
    }
    if (ValidarContactMethod() == false) {
        Validado = false;
    }
    if (ValidarGDPR() == false) {
        Validado = false;
    }

    return Validado;
}