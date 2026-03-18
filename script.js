function getNextFriday() {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 5=Fri

  let diff = (5 - day + 7) % 7;

  // if today is Friday, go to NEXT Friday
  if (diff === 0) diff = 7;

  const nextFriday = new Date();
  nextFriday.setDate(now.getDate() + diff);
  nextFriday.setHours(0, 0, 0, 0);

  return nextFriday;
}

const targetDate = getNextFriday();

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("timer").innerText = "🚀 We are LIVE!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (diff / (1000 * 60 * 60)) % 24
  );

  document.getElementById("timer").innerText =
    `${days} days / ${hours} hours`;
}

updateCountdown();
setInterval(updateCountdown, 60000); // update every minute
