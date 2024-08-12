let tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

function updateTxt(){
try {
const namee3e = tg.initDataUnSafe.user.first_name + " " + tg.initDataUnSafe.user.last_name;
  document.getElementById("user").textContent = namee3e;
} catch (err) {}
  
}

var timer = setInterval(updateTxt, 1);
