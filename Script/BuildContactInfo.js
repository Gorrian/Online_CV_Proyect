
/**
 * Funcion que se responsabiliza de buscar en el JSON CV_Information e
 * imprime la informacion basandose en su contenido y hay una funcion
 * similar para cada seccion que se crea de forma dinamica con algunas
 * variaciones dependiendo del estilo que se desea.
 */
function BuildContactInfo (ContactInfo, ID){
    readTextFile("CV_Information.json", function (text) {
        let data = JSON.parse(text)[0][ContactInfo];
        let Listado=document.getElementById(ID);
        let Result="<h3>Informacion de contacto</h3>";
        Result+="<ul>";
        for (const key in data) {
            let Element=data[key];
            let AttrID=key.replace(/ /g,"_");

            Result+='<li>'+key+': '+Element+'</li>';
           


            
        }
        Result+="</ul>"
        Listado.innerHTML=Result;
    });
}
