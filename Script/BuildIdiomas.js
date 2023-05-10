function BuildIdiomas(Idiomas, ID) {
    readTextFile("/CV_Information.json", function (text) {
        let data = JSON.parse(text)[0][Idiomas];
        let Listado=document.getElementById(ID);
        let Result="";
        for (const key in data) {
            let Element=data[key];
            console.log(Element);

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
        
        //Listado.innerHTML=Result;
    });
}
BuildIdiomas("Idiomas","SOmething")