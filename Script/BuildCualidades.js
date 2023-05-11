function BuildCUalidades(Cualidades, ID) {
    readTextFile("/CV_Information.json", function (text) {
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