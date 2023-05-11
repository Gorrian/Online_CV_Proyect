/**
 * Funcion que se responsabiliza de buscar en el JSON CV_Information e
 * imprime la informacion basandose en su contenido y hay una funcion
 * similar para cada seccion que se crea de forma dinamica con algunas
 * variaciones dependiendo del estilo que se desea.
 */
function BuildCualidades(Cualidades, ID) {
    readTextFile("CV_Information.json", function (text) {
        let data = JSON.parse(text)[0][Cualidades];
        let Listado=document.getElementById(ID);
        let Result="";
        for (const key in data) {
            let Element=data[key];
            let AttrID=key.replace(/ /g,"_");

            Result+='<li class="list-group-item">'+data[key]+'</li>'
           


            
        }
        
        Listado.innerHTML=Result;
    });
}