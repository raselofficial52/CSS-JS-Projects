const btn=document.querySelector(".btn");
const modal = document.querySelector("#modal");
const modal_content = document.querySelector(".modal_content");
const close= document.querySelector(".close");

// btn
btn.addEventListener("click",function(){
    modal.style.visibility="visible";
    modal_content.style.transform="scale(1, 1)";
    modal_content.style.transition=".5s";
   
})

// close
close.addEventListener("click",function(){
    modal.style.visibility = "hidden";
    modal_content.style.transform = "scale(0,0)";
     modal_content.style.transition = ".2s";
    
})

// modal
window.addEventListener("click",function(e){
    if (e.target == modal){
        modal.style.visibility="hidden";
        modal_content.style.transform = "scale(0,0)";
        modal_content.style.transition = ".2s";
    }
})