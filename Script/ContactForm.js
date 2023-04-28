let NombreVal = false;
let EmailVal = false;
let TelefonoVal = false;
let FechaVal = false;
let AsuntoVal = false;


$(document).ready(function () {
    $("#Nombre").blur(ValidarNombre);

    $("#Email").blur(ValidarEmail);

    $("#Telefono").blur(ValidarTelefono);

    $("#Fecha").blur(ValidarFecha);

    $("#Asunto").blur(ValidarAsunto);
});

function ValidarNombre(){
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
}

function ValidarEmail(){
    if ($("#Email").val().length > 0) {
        let Regex = /^[\w|0-9]+([\.\+\-]?\w+)*@[\w|0-9]+([\.-]?\w+)*(\.\w{2,4})+$/
        if (Regex.test($("#Email").val())) {
            EmailVal=true;
            $("#WarnEmail").text("");
            $("#Email").removeClass("border-danger");
            $("#Email").addClass("border-success");
        } else {
            EmailVal=false;
            $("#WarnEmail").text("El valor introducido no es un correo valido");
            $("#Email").addClass("border-danger");
            $("#Email").removeClass("border-success");
        }
    } else {
        EmailVal=false;
        $("#WarnEmail").text("El campo es obligatorio y no puede estar vacio");
        $("#Email").addClass("border-danger");
        $("#Email").removeClass("border-success");
    }
}

function ValidarTelefono(){
    if ($("#Telefono").val().length > 0) {
        let Regex = /^[6|9]\d{8}/
        if (Regex.test($("#Telefono").val())) {
            TelefonoVal=true;
            $("#WarnTelofono").text("");
            $("#Telefono").removeClass("border-danger");
            $("#Telefono").addClass("border-success");
        } else {
            TelefonoVal=false;
            $("#WarnTelefono").text("El valor introducido no es un telefono valido");
            $("#Telefono").addClass("border-danger");
            $("#Telefono").removeClass("border-success");
        }
    } else {
        TelefonoVal=false;
        $("#WarnTelefono").text("El campo es obligatorio y no puede estar vacio");
        $("#Telefono").addClass("border-danger");
        $("#Telefono").removeClass("border-success");
    }
}

function ValidarFecha(){
    if ($("#Fecha").val().length > 0) {
        let Regex = /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/gm
        if (Regex.test($("#Fecha").val())) {
            FechaVal=true;
            /*let TodayDate=new Date();
            let SelectedDate=new Date($("#Fecha").val());
            if()*/
            $("#WarnFecha").text("");
            $("#Fecha").removeClass("border-danger");
            $("#Fecha").addClass("border-success");
        } else {
            FechaVal=false;
            $("#WarnFecha").text("El valor introducido sorprendentemente no es una fecha valida");
            $("#Fecha").addClass("border-danger");
            $("#Fecha").removeClass("border-success");
        }
    } else {
        FechaVal=false;
        $("#WarnFecha").text("El campo es obligatorio y no puede estar vacio");
        $("#Fecha").addClass("border-danger");
        $("#Fecha").removeClass("border-success");
    }
}

function ValidarAsunto(){
    if ($("#Asunto").val() > 0) {
        AsuntoVal=true;
        $("#WarnAsunto").text("");
        $("#Asunto").removeClass("border-danger");
        $("#Asunto").addClass("border-success");
    } else {
        AsuntoVal=false;
        $("#WarnAsunto").text("El campo es obligatorio y no puede estar vacio");
        $("#Asunto").addClass("border-danger");
        $("#Asunto").removeClass("border-success");
    }
}

function ValidarContactMethod(){
    if($("#ContactMethod0").is(":checked")==false && $("#ContactMethod1").is(":checked")==false){
        $("#WarnContactMethod").text("Necesito al menos un metodo de contacto");
        $("#ContactMethod").addClass("border-danger border");
        return false
    }else{
        $("#WarnContactMethod").text("");
        $("#ContactMethod").removeClass("border-danger border");
        return true
    }
}

function ValidarGDPR(){
    if($("#GDPR").is(":checked")==true){
        $("#GDPR").removeClass("border-danger");
        $("#WarnGDPR").text("");
        return true
    }else{
        $("#GDPR").addClass("border-danger");
        $("#WarnGDPR").text("Debe confirmar que esta conforme con la ley de proteccion de datos");
        return false
    }
}

function ValidarCaptcha(){
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

function Validar() {
    //No tuve tiempo para implementar el checkeo al intentar enviar el formulario

    let Validado = false;
    ValidarContactMethod();
    if(ValidarCaptcha()==false){
        Validado=false;
    }
    if(ValidarContactMethod()==false){
        Validado=false;
    }
    if(ValidarGDPR()==false){
        Validado=false;
    }

    return Validado;
}