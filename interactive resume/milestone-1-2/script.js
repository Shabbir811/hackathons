var toggleBtn = document.getElementById("toggle-btn");
var skillSec = document.getElementById("skill-sec");
toggleBtn.addEventListener("click", function () {
    if (skillSec.style.display !== "none") {
        skillSec.style.display = "none";
        toggleBtn.style.backgroundColor = "#de2f2f";
        toggleBtn.innerHTML = "Hide";
    }
    else {
        skillSec.style.display = "block";
        toggleBtn.style.backgroundColor = "#007bff";
        toggleBtn.innerHTML = "Show";
    }
});
