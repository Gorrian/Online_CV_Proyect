/**
 * Esta funcion simplemente se encarga de apendicar el listado para
 * montar el listado.
 */
function PrpeareFormacionBuild(ID,SectionID){
    $("#"+SectionID).append("<ul id='"+ID+"' class='list-group'>");
}


/**
 * Funcion que se responsabiliza de buscar en el JSON CV_Information e
 * imprime la informacion basandose en su contenido y hay una funcion
 * similar para cada seccion que se crea de forma dinamica con algunas
 * variaciones dependiendo del estilo que se desea.
 */
function BuildFormacion(Formacion, ID) {
    readTextFile("CV_Information.json", function (text) {
        let data = JSON.parse(text)[0][Formacion];
        let Listado=document.getElementById(ID);
        let Result="";
        for (const key in data) {
            let Element=data[key];
            if (Array.isArray(Element)) {
                let TempElement="";
                TempElement+="<ul>"
                Element.forEach(element => {
                    TempElement+="<li>"+element+"</li>";
                });
                TempElement+="</ul>"
                Element=TempElement;
            }

            let AttrID=key.replace(/ /g,"_");

            Result+=("<a data-bs-toggle=\"collapse\" href=\"#"+ID+AttrID+"\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">");
            Result+=("<li class=\"list-group-item list-group-item-action\">"+key);
            Result+=("</li>");
            Result+=("</a>");
            Result+=("<div class=\"collapse\" id=\""+ID+AttrID+"\">");
            Result+=("<div class=\"card card-body mb-4 ms-4\">");
            Result+=("<ul class=\"LiSinForma\">");
            Result+=(Element);
            Result+=("</ul>");
            Result+=("</div>");
            Result+=("</div>");
            
           


            
        }
        
        Listado.innerHTML=Result;
    });
}