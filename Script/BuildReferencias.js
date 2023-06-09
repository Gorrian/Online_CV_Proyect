/**
 * Funcion que se responsabiliza de buscar en el JSON CV_Information e
 * imprime la informacion basandose en su contenido y hay una funcion
 * similar para cada seccion que se crea de forma dinamica con algunas
 * variaciones dependiendo del estilo que se desea.
 */
function BuildReferencias (Referencias, ID){
    readTextFile("CV_Information.json", function (text) {
        let data = JSON.parse(text)[0][Referencias];
        let Listado=document.getElementById(ID);
        let Result="<h3>Paginas referentes</h3>";
        for (const key in data) {
            let Element=data[key];
            let AttrID=key.replace(/ /g,"_");
            Result+='<a href="'+data[key]["URL"]+'" target="_blank">';
            Result+='<img src="'+data[key]["Image"]+'" alt="Imagen no cargada o encontrada" class="me-4">';
            Result+='</a>';


            
        }
        Listado.innerHTML=Result;
    });
}