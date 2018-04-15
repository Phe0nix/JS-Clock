var secHand = document.querySelector(".second-hand"),
    minHand = document.querySelector(".min-hand"),
    hourHand = document.querySelector(".hour-hand"),
    now='',
    seconds='',
    minutes='',
    hours='',
    secondsDegrees='',
    minutesDegrees='',
    hoursDegrees='';

function getDate(){
  now = new Date();
  seconds = now.getSeconds();
  minutes = now.getMinutes();
  hours = now.getHours();
  secondsDegrees = ((seconds / 60) * 360) + 90;
  minutesDegrees = ((minutes / 60) * 360) + 90;
  hoursDegrees = ((hours / 12) * 360) + 90;
  secHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(getDate, 1000);
