let remainingTime = 86400;

function setTime() {
  if (remainingTime <= 0) {
    return;
  }
  let hour = Math.floor(remainingTime / 3600);
  let min = Math.floor((remainingTime % 3600) / 60);
  let sec = (remainingTime % 3600) % 60;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;
  remainingTime -= 1;
}

$countDownInterval = setInterval(setTime, 1000);
