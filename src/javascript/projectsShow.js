var projectsDOM = document.querySelectorAll(".proyContent")[0];
var pageLanguage = document.querySelectorAll(".headerTitle")[0].innerHTML;

var projectHTML = "";
for ( let p=0; p<projectList.length; p++ ){
    if (projectList[p].page != 'False' ) {
        var projectButton = '<div class="projectSelector" style="background-image: url(\''+ projectList[p].image +'\');" onclick="javascript:location.href=\'projects/'+ projectList[p].page +'\'"> <div class="marco"> <div class="title">'+ projectList[p].nombre +'</div> <br><br><div class="content">'+ projectList[p].descripcion+'<br><br><b> < more > </b></div> </div> </div>'
    } else {
        var projectButton = '<div class="projectSelector" style="background-image: url(\''+ projectList[p].image +'\');"> <div class="marco"> <div class="title">'+ projectList[p].name +'</div> <br><br><div class="content">'+ projectList[p].description +'<br><br><b> <> </b></div> </div> </div>'
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
