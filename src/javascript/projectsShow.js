var projectsDOM = document.querySelectorAll(".proyContent")[0];
var pageLanguage = document.querySelectorAll(".headerTitle")[0].innerHTML;

var projectHTML = "";
for ( let p=0; p<projectList.length; p++ ){
    if (pageLanguage == "Proyectos") {
        var projectButton = '<div class="projectSelector" style="background-image: url(\'../../src/image/projects/'+ projectList[p].image +'\');" onclick="javascript:location.href=\'proyectos/'+ projectList[p].page +'\'"> <div class="marco"> <div class="title">'+ projectList[p].nombre +'</div> <br><br><div class="content">'+ projectList[p].descripcion+'<br><br><b> < ver > </b></div> </div> </div>'
    } else {
        var projectButton = '<div class="projectSelector" style="background-image: url(\'../../src/image/projects/'+ projectList[p].image +'\');" onclick="javascript:location.href=\'projects/'+ projectList[p].page +'\'"> <div class="marco"> <div class="title">'+ projectList[p].name +'</div> <br><br><div class="content">'+ projectList[p].description+'<br><br><b> < ver > </b></div> </div> </div>'
    }
    projectHTML = projectHTML + projectButton 
}

var whiteBoxes = 5-projectList.length%5
if ( whiteBoxes != 0){
    for ( let w=0; w<whiteBoxes; w++){
        let projectButton = '<div class="projectSelector" style="background-color: white"> </div>'
        projectHTML = projectHTML + projectButton 
    }
}

projectsDOM.innerHTML = projectHTML;
