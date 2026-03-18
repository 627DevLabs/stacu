const targetDate = new Date("March 29, 2026 00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;
  const timer = document.getElementById("timer");

  if (!timer) return;

  if (diff <= 0) {
    timer.innerHTML = "🚀 We are LIVE!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timer.innerHTML = `
    <span>${days}d</span> :
    <span>${hours}h</span> :
    <span>${minutes}m</span> :
    <span>${seconds}s</span>
  `;
}

updateCountdown();
setInterval(updateCountdown, 1000); // update every second
