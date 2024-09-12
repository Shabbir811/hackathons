const toggleBtn = document.getElementById("toggle-btn")as HTMLButtonElement
const skillSec  =document.getElementById("skill-sec") as HTMLElement

toggleBtn.addEventListener("click", ()=>{

    if(skillSec.style.display !== "none"){
        skillSec.style.display="none";
        toggleBtn.style.backgroundColor ="#de2f2f"
        toggleBtn.innerHTML = "Show skills"
        
        
    }else{
        skillSec.style.display="block";
        toggleBtn.style.backgroundColor ="#007bff"
        toggleBtn.innerHTML = "Hide skills"
    
    }
});
