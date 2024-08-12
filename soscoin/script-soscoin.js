let allSos = localStorage.getItem('allSos') || 0;

function incrementClicks() {
  const box = document.querySelector('img.tap');
  box.classList.add('animate');
  setTimeout(() => {
  box.classList.remove('animate');
}, 60);
    allSos++;
    localStorage.setItem('allSos', allSos);
}

function updateTxt(){
  document.getElementById("Y2xpY").textContent = allSos;
}
var timer = setInterval(updateTxt, 1);
