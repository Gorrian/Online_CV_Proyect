
/**
 * Funcion inacabada para hacer que los listados se note mas que se puede seleccionar.
 */
$(document).ready(function () {
    $(".list-group-item").hover(function () {
            $(".collapse .list-group-item").addClass("active");
            console.log("Helo world1");
            
        }, function () {
            $(".list-group-item").removeClass("active");
            console.log("Helo world2");
        }
    );
});