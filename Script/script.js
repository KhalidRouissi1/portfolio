





window.onscroll = function(){
    console.log(scrollY)
    if(scrollY > 150 ){
        document.querySelector(".aboutMe").classList.add("addAnim")
    }
 
 
}