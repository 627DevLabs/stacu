// 🎯 SET LAUNCH DATE
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
  const hours = Math.floor(
    (diff / (1000 * 60 * 60)) % 24
  );

  // ✅ YOUR CUSTOM FORMAT
  timer.innerHTML =
    `<span>${days}d</span> : <span>${hours}h</span>`;
}

// Run immediately
updateCountdown();

// Update every minute
setInterval(updateCountdown, 60000);
