// Countdown Timer
function calculateTimeLeft() {
  const targetDatePacific = new Date('2024-08-27T00:00:00-07:00');
  const nowUTC = new Date();
  const pacificOffset = -7;
  const nowPacific = new Date(nowUTC.getTime() + pacificOffset * 60 * 60 * 1000);
  const difference = targetDatePacific - nowPacific;

  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  } else {
    timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return timeLeft;
}

function updateCountdown() {
  const timeLeft = calculateTimeLeft();
  document.getElementById('countdownTimer').innerHTML =
    `${timeLeft.days} Days ${timeLeft.hours} Hours ${timeLeft.minutes} Minutes ${timeLeft.seconds} Seconds`;
}

setInterval(updateCountdown, 1000);

// Save Birthday Message
function saveMessage() {
  const message = document.getElementById('birthdayMessage').value;
  localStorage.setItem('birthdayMessage', message);
  document.getElementById('savedMessage').innerHTML = `<h3>Saved Message:</h3><p>${message}</p>`;
}

// Load saved message on page load
window.onload = function() {
  const savedMessage = localStorage.getItem('birthdayMessage');
  if (savedMessage) {
    document.getElementById('savedMessage').innerHTML = `<h3>Saved Message:</h3><p>${savedMessage}</p>`;
  }
};
