function showNotification(textTo){
  var notifDiv = document.getElementById('notif');
  notifDiv.style.display = "block";
  notifDiv.innerHTML = textTo + "<br><button onclick='hideNotification()'>Закрыть</button>";
}
function hideNotification() {
  var notifDiv = document.getElementById('notif');
  notifDiv.style.display = "none";
  notifDiv.innerHTML = '';
}
