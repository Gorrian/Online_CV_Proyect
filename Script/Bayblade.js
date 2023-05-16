
$(document).ready(function () {
    $("#MyPhoto").hover(function () {
        let el = $(this);
        let timeout = setTimeout(function () {
            console.log("Hover Element");
        }, 10000);
        el.data("timeout", timeout);
    }, function () {
        clearTimeout($(this).removeClass("hover").data("timeout"));
    });
});
