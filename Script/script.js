





window.onscroll = function(){
    console.log(scrollY)
    if(scrollY > 150 ){
        document.querySelector(".aboutMe").classList.add("addAnim")
    }

    if(scrollY > 150 ){
        dropDownMenu.style.display = "none";
    }
 
 
    
}
window.onresize = function() {
    if (window.innerWidth > 768) {
        dropDownMenu.style.display = "none";



    }
    if (window.innerWidth <768) {
        dropDownMenu.style.display = "none";
        let op  =  document.querySelector(".otherProjects");
        op.id = "Work"
    }



    

};
let dropDownMenu =   document.querySelector(".dropDownMenu");


let work = document.querySelector(".work");


work.addEventListener("clcik",()=>{
    work.style.cssText = ``;
});

let menuBtn = document.querySelector(".menuBtn");
var toggle = false;

menuBtn.addEventListener("click",()=>
{   
    console.log(toggle)
    toggle = !toggle;
    toggle ? dropDownMenu.style.display ="block" :dropDownMenu.style.display ="none" ;

})

