// scripts.js

// Countdown Timer
function updateCountdown() {
  const countdownElement = document.getElementById('countdown');

  // Check if countdownElement is found
  if (!countdownElement) {
    console.error('Element with ID "countdown" not found.');
    return;
  }

  const targetDate = new Date('2024-08-27T00:00:00-07:00'); // Target date in Pacific Time
  const now = new Date();
  const timeDiff = targetDate - now;

  if (timeDiff <= 0) {
    countdownElement.innerHTML = 'The event has started!';
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `
    ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds
  `;
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Balloon Click Event
document.querySelectorAll('.balloon').forEach(balloon => {
  balloon.addEventListener('click', () => {
    document.querySelector('h1').style.color = getRandomColor();
  });
});

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Initial countdown update
updateCountdown();
