const targetDate = new Date("March 29, 2026 00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const text = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

  document.getElementById("timerTop").innerText = text;
  document.getElementById("timerBottom").innerText = text;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Update every minute (no need for seconds anymore)
setInterval(updateCountdown, 60000);

// Run on load + resize
updateLayout();
window.addEventListener("resize", updateLayout);second
