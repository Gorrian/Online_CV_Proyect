/**
 * Funcion que se responsabiliza de buscar en el JSON CV_Information e
 * imprime la informacion basandose en su contenido y hay una funcion
 * similar para cada seccion que se crea de forma dinamica con algunas
 * variaciones dependiendo del estilo que se desea.
 */
function BuildExperiencia(Trabajo, ID) {
    readTextFile("CV_Information.json", function (text) {
        let data = JSON.parse(text)[0]["Experiencia laboral"][Trabajo];
        let Listado=document.getElementById(ID);
        let Result="";
        for (const key in data) {
            let Element=data[key];
            if (Array.isArray(Element)) {
                let TempElement="";
                Element.forEach(element => {
                    TempElement+=element;
                });
                Element=TempElement;
            }

            let AttrID=key.replace(/ /g,"_");

            Result+=("<a data-bs-toggle=\"collapse\" href=\"#"+ID+AttrID+"\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">");
            Result+=("<li class=\"list-group-item list-group-item-action\">"+key);
            Result+=("</li>");
            Result+=("</a>");
            Result+=("<div class=\"collapse\" id=\""+ID+AttrID+"\">");
            Result+=("<div class=\"card card-body mb-4 ms-4\">");
            Result+=(Element);
            Result+=("</div>");
            Result+=("</div>");
            
           


            
        }
        
        Listado.innerHTML=Result;
    });
}
//BuildExperiencia("Practicas de SMX", "Something");