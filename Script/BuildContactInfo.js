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
