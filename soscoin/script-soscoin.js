let allSos = localStorage.getItem('allSos') || 0;
function incrementClicks() {
    allSos++;
    localStorage.setItem('allSos', allSos);
}
function updateTxt(){
  document.getElementById("Y2xpY").textContent = allSos;
}
var timer = setInterval(updateTxt, 1);
