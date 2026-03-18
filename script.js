const targetDate = new Date("March 29, 2026 00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;
  const timer = document.getElementById("timer");

  if (diff <= 0) {
    timer.innerHTML = "🚀 We are LIVE!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  timer.innerHTML = `<span>${days}d</span> : <span>${hours}h</span>`;
}

updateCountdown();
setInterval(updateCountdown, 60000);
