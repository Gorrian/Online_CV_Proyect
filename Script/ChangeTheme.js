/**
 * Este Script se responsabiliza de que el boton de la cabezera cambie el
 * tema de la pagina al ser pulsado cambiando las variables dinamicas
 * establecidas en el main.css
 */


let CSSVariables = document.querySelector(':root');
let LightTheme=true;

function ChangeTheme() {
    if(LightTheme==false){
        CSSVariables.style.setProperty('--Dynamic-bg-Color', 'White');
        CSSVariables.style.setProperty('--Dynamic-Text-Color','Black');
        CSSVariables.style.setProperty('--Dynamic-Border-Color','#DEE2E6');
        CSSVariables.style.setProperty('--Dynamic-Hover-Color','#D0D0D7');
        LightTheme=true;
    }else{
        CSSVariables.style.setProperty('--Dynamic-bg-Color', 'Black');
        CSSVariables.style.setProperty('--Dynamic-Text-Color','White');
        CSSVariables.style.setProperty('--Dynamic-Border-Color','#4d4d4d');
        CSSVariables.style.setProperty('--Dynamic-Hover-Color','#242629');
        LightTheme=false;
    }
    
}


$(document).ready(function () {
    $("#ThemeButton").click(ChangeTheme);
});