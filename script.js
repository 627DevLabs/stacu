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
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const seconds = Math.floor((diff / 1000) % 60);

  timer.innerHTML =
    `<span>${days}d</span> : <span>${hours}h</span> : <span>${seconds}s</span>`;
}

setInterval(updateCountdown, 1000);
updateCountdown();


// 📱 ORIENTATION-BASED LAYOUT CONTROL
function updateLayout() {
  const slider = document.getElementById("slider");

  const isMobile = window.innerWidth <= 600;
  const isPortrait = window.innerHeight > window.innerWidth;

  if (isMobile && isPortrait) {
    // 📱 Portrait → Vertical
    slider.style.animation = "spinVertical 20s linear infinite";
    slider.style.transform = "none";

    document.querySelectorAll(".slider span").forEach((el, i) => {
      el.style.transform =
        `rotateX(${i * 60}deg) translateZ(220px)`;
    });

  } else {
    // 💻 Landscape/Desktop → Horizontal
    slider.style.animation = "spin 22s linear infinite";

    document.querySelectorAll(".slider span").forEach((el, i) => {
      el.style.transform =
        `rotateY(${i * 60}deg) translateZ(320px)`;
    });
  }
}

// Vertical animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes spinVertical {
  from { transform: rotateX(0deg); }
  to { transform: rotateX(360deg); }
}`;
document.head.appendChild(style);

// Run on load + resize
updateLayout();
window.addEventListener("resize", updateLayout);second
