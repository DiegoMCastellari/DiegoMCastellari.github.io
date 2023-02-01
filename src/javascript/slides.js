var slideBottons = "";
for ( let s=0; s<slidesList.length; s++ ){
    let subcategoriesClass = ""
    for (let b=0; b<slidesList[s].subcategory.length; b++) {
        subcategoriesClass = subcategoriesClass + " "+slidesList[s].subcategory[b]
    }
    let slide ='<div class="slideSelector '+ slidesList[s].categories + subcategoriesClass +'" id="'+ slidesList[s].id +'" onclick="updateSlide(this.id)"><img  src="../src/image/slides/'+ slidesList[s].img +'/Slide1.PNG"></div>'
    slideBottons = slideBottons + slide
}
document.querySelector('.slideList').innerHTML = slideBottons;

var subcategoryHTML = "";
for (let s= 0; s<slidesListSubcategories.length; s++) {
    let subcategoryButton = '<button class="subcategoryButton '+slidesListSubcategories[s]+'" onclick="filterSlidesBySubcategory(\''+slidesListSubcategories[s]+'\')" >'+slidesListSubcategories[s]+'</button>'
    subcategoryHTML = subcategoryHTML + subcategoryButton 
}
document.querySelector('.subCategory').innerHTML = subcategoryHTML;
