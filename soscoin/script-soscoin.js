let allSos = localStorage.getItem('allSos') || 0;
let level = localStorage.getItem('allSos') || 1;

function newLevel() {
  if (allSos >= 100*level){//ss
  level++;
  localStorage.setItem('userLevel', level);
  allSos -= level * 100;
  localStorage.setItem('allSos', allSos);
} else {showNotification('Недостаточно средств');}
}

function unLevel(val){
  level -= val;
  localStorage.setItem('userLevel', level);
}

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
  document.getElementById("reactor").text = "Прокачать уровень ("+ level*100 +")";
  document.getElementById("level").innerHTML = level;
  document.getElementById("Y2xpY").innerHTML = "<img src='images/coin.png' style='width:4vh' alt='coin'>"+allSos;
}
var timer = setInterval(updateTxt, 1);
