
/**
 * Esta funcion se encarga de leer cualquier archivo json para despues
 * ser tratado por cualquier otra funcionalidad que requiera de la informacion
 * de los JSON que tiene la pagina
 */
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//Example of use:
/*readTextFile("/Captchas.json", function(text){
    var data = JSON.parse(text);
    console.log(data[0]["Imagen"]);
});*/