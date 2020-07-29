const accordion = document.querySelectorAll(".accordion");
for (let i = 0; i < accordion.length;i++){
    accordion[i].addEventListener("click",function(){
        this.classList.toggle("active");
        const panel=this.nextElementSibling;
        const prePanel = this.previousElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight=null;
        }else{
            panel.style.maxHeight = panel.scrollHeight+"px";
        }
        
    })
}