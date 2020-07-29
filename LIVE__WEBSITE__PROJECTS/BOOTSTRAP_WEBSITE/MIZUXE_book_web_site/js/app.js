// modal
const modalBtn = document.querySelector("#modal_btn");
const modal = document.querySelector("#modal");
const close = document.querySelector(".close");
const modalContent = document.querySelector(".modal_content");
modalBtn.addEventListener("click",function(){
    modal.style.visibility="visible";
    modalContent.style.transform="scale(1,1)";
    
})
close.addEventListener("click",function(){
    modal.style.visibility = "hidden";
    modalContent.style.transform = "scale(0,0)";
})
window.addEventListener("click",function(e){
    if (e.target == modal){
        modal.style.visibility = "hidden"
    }
})

// scroll to top
const toTop = document.querySelector(".toTop");
window.addEventListener("scroll",function(){
    if(window.pageYOffset>150){
        toTop.classList.add("toTopActive");
    }else{
        toTop.classList.remove("toTopActive");
    }
})
// preloader
const preloader = document.querySelector(".preloader");
window.addEventListener("load",function(){
    preloader.style.display="none";
})