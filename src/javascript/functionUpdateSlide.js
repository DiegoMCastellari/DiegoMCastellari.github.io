var categoryFilter = "";
var subcategoryFilter = [];
var slidesListSubcategories = [];

function updateSlide(IDSlide){   // function used to update the slide presentation
    let findIFrame;
    for ( let s=0; s<slidesList.length; s++){
        if (slidesList[s].id == IDSlide){
            findIFrame = slidesList[s].slide
            break
        }
    }
    //document.querySelector('.slide').innerHTML = findIFrame; 
    let slideImages = document.querySelectorAll('.slideImg') 
    for ( let s=0; s<slideImages.length; s++){
        slideImages[s].src = "../src/image/slides/"+IDSlide+"/Slide"+(s+1)+".PNG";
    }
    slideIndex = 1;
    showSlides(slideIndex);
    document.querySelectorAll('.slidesScreen')[0].style.display = "flex"

}

function updetaSlidesList (category, subcategories){  // function to update de slide list by category and subcategory
    var elems = document.querySelectorAll('.slideSelector');
    slidesListSubcategories = [];

    for ( let c=0 ; c< elems.length; c++) {
        let classPresent = elems[c].classList.value;
        let subcategoriesPresent = classPresent.split(" ").slice([2])
        
        let checkSubcategory = true;
        if(subcategories.length!=0){
            for (let s=0; s<subcategories.length; s++) {
                if( !classPresent.includes(subcategories[s])){
                    checkSubcategory = false
                }
            }
        }
        let checkCategory = true;
        if(category!=""){
            checkCategory = classPresent.includes(category)
        }

        if( checkCategory & checkSubcategory == true){
            for (let a=0; a<subcategoriesPresent.length; a++) {
                if( !slidesListSubcategories.includes(subcategoriesPresent[a]) ){
                    slidesListSubcategories.push(subcategoriesPresent[a])
                }
            }
            elems[c].style.display = "block";
        } else {
            elems[c].style.display = "none";
        }
    }
}

function updateSubcategories (subcategories){
    var subcategoryHTML = "";
    for (let s= 0; s<subcategoryFilter.length; s++) {
        let subcategoryButton = '<button class="subcategoryButton '+subcategoryFilter[s]+'" onclick="filterSlidesBySubcategory(\''+subcategoryFilter[s]+'\')" style="background-color:#0079B5">'+subcategoryFilter[s]+'</button>'
        subcategoryHTML = subcategoryHTML + subcategoryButton
    }
    
    for (let s= 0; s<subcategories.length; s++) {
        if ( !subcategoryHTML.includes(subcategories[s]) ){
            let subcategoryButton = '<button class="subcategoryButton '+subcategories[s]+'" onclick="filterSlidesBySubcategory(\''+subcategories[s]+'\')" >'+subcategories[s]+'</button>'
            subcategoryHTML = subcategoryHTML + subcategoryButton
        }
    }
    document.querySelector('.subCategory').innerHTML = subcategoryHTML;
}
 
function filterSlidesByCategories(thisclass, className){
    categoryFilter = className;

    var activeItem = document.querySelectorAll(".active");
    if(activeItem.length != 0){
        activeItem[0].classList.remove("active");
       }
    var activeItem = document.querySelectorAll(thisclass);
    activeItem[0].classList += ' active';

    updetaSlidesList (categoryFilter, subcategoryFilter)
    updateSubcategories(slidesListSubcategories)
}

function filterSlidesBySubcategory (subcategoriesName) {

    if( !subcategoryFilter.includes(subcategoriesName)){
        subcategoryFilter.push(subcategoriesName)
    } else {
        let index = subcategoryFilter.indexOf(subcategoriesName);
        if (index > -1) {
            subcategoryFilter.splice(index, 1);
        }
    }
    console.log(subcategoryFilter);

    updetaSlidesList (categoryFilter, subcategoryFilter)
    updateSubcategories(slidesListSubcategories)    
}

function closeWindow(){
    document.querySelectorAll('.slidesScreen')[0].style.display = "none"
}