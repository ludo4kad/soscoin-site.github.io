function showNotification(textTo, timeFor){
  var notifDiv = document.getElementById('notif');
  notifDiv.style.display = "block";
  notifDiv.innerHTML = textTo;
  setTimeout(() => {  notifDiv.style.display = "none"; }, timeFor);
}
