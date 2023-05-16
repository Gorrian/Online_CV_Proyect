
$(document).ready(function () {
    let audio = new Audio('Bayblade.mp3');
    $("#MyPhoto").hover(function () {
        let el = $(this);
        let timeout = setTimeout(function () {
            $("#MyPhoto").attr("src","Images/Bayblade.jpg");
            
            $('#MyPhoto').click(function () { 
                audio.play();
            });
        }, 10000);
        el.data("timeout", timeout);
    }, function () {
        clearTimeout($(this).removeClass("hover").data("timeout"));
        $(this).attr("src","Images/PhotoOfMe.jpg");
        $("#MyPhoto").unbind('click');
    });
});
