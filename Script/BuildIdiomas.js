/**
 * Funcion que se responsabiliza de buscar en el JSON CV_Information e
 * imprime la informacion basandose en su contenido y hay una funcion
 * similar para cada seccion que se crea de forma dinamica con algunas
 * variaciones dependiendo del estilo que se desea.
 */
function BuildIdiomas(Idiomas, ID) {
    readTextFile("CV_Information.json", function (text) {
        let data = JSON.parse(text)[0][Idiomas];
        let Listado=document.getElementById(ID);
        let Result="";
        for (const key in data) {
            let Element=data[key];
            let AttrID=key.replace(/ /g,"_");

            Result+='<div class="col-sm-12 col-md-4">';
            Result+='<img class="img-thumbnail" height="250" width="250" src="'+data[key]["Imagen"]+'" alt="Imagen no cargada o encontrada">';
            Result+='<figcaption>'+data[key]["Nivel"]+'</figcaption>'
            Result+='</div>'
           


            
        }
        
        Listado.innerHTML=Result;
    });
}
