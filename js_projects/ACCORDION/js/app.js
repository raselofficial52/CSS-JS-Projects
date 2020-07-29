// Accordion
const accordionBtn = document.querySelectorAll(".accordion_btn");
for (let i = 0; i < accordionBtn.length;i++){
    accordionBtn[i].addEventListener("click",function(){
        this.classList.toggle("active");
        let panel=this.nextElementSibling;

        if (panel.style.maxHeight){
            panel.style.maxHeight=null;
        }else{
            panel.style.maxHeight = panel.scrollHeight+"px";
        }
    })
}