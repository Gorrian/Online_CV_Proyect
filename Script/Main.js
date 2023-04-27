$(document).ready(function () {
    console.log("Helo world");
    $(".list-group-item").hover(function () {
            $(".collapse .list-group-item").addClass("active");
            console.log("Helo world1");
            
        }, function () {
            $(".list-group-item").removeClass("active");
            console.log("Helo world2");
        }
    );
});