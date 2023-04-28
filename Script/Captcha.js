let CaptchaAnswer="";

$(document).ready(function () {
    readTextFile("/Captchas.json", function(text){
        let data = JSON.parse(text);
        let ChosenCaptcha = data[Math.floor(Math.random() * data.length)];
        console.log(ChosenCaptcha);
        $("#LabelCaptcha").text(ChosenCaptcha["Pregunta"]);
        $("#ImgCaptcha").attr("src", ChosenCaptcha["Imagen"]);
        CaptchaAnswer=ChosenCaptcha["Respuesta"];
        console.log(CaptchaAnswer);
    });
});
