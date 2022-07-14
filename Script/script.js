





window.onscroll = function(){
    console.log(scrollY)
    if(scrollY > 150 ){
        document.querySelector(".aboutMe").classList.add("addAnim")
    }

 
 
}

let work = document.querySelector(".work");


work.addEventListener("clcik",()=>{
    work.style.cssText = ``;
});