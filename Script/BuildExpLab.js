function BuildExperiencia(Trabajo){
    readTextFile("/CV_Information.json", function(text){
        let data = JSON.parse(text)[0]["Experiencia laboral"][Trabajo];
        for(const key in data){
            console.log(`${key}: ${data[key]}`);
        }
    });
}
BuildExperiencia("Practicas de SMX")