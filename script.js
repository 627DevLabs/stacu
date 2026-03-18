// 🎯 Launch Date
const targetDate = new Date("March 29, 2026 00:00:00");

// COUNTDOWN
function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;
  const timer = document.getElementById("timer");

  if (diff <= 0) {
    timer.innerHTML = "🚀 We are LIVE!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (diff / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (diff / (1000 * 60)) % 60
  );

  // ✅ Final format
  timer.innerHTML =
    `<span>${days}d</span> : <span>${hours}h</span> : <span>${minutes}m</span>`;
}

// Run immediately
updateCountdown();

// Update every minute (no need for seconds anymore)
setInterval(updateCountdown, 60000);

// Run on load + resize
updateLayout();
window.addEventListener("resize", updateLayout);second
