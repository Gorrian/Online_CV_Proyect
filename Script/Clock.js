/**
 * Esta funcion se responsabiliza de que pueda funcionar un reloj en la pagina.
 */

function clock(){
    CheckTime();
    setInterval(CheckTime,1000);
}
function CheckTime(){
    let TimeNow=new Date();
    let Hour=TimeNow.getHours();
    if(Hour < 10){
        Hour="0"+Hour;
    }
    let Minute=TimeNow.getMinutes();
    if(Minute < 10){
        Minute="0"+Minute;
    }
    let Second=TimeNow.getSeconds();
    if(Second < 10){
        Second="0"+Second;
    }
    $("#Clock").text(Hour+":"+Minute+":"+Second);
}