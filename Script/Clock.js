function clock(){
    setInterval(CheckTime,1000);
}
function CheckTime(){
    let TimeNow=new Date();
    $("#Clock").text(TimeNow.getHours()+":"+TimeNow.getMinutes()+":"+TimeNow.getSeconds());
}