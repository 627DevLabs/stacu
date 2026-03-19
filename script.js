// COUNTDOWN
// 🔥 COUNTDOWN
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


// 🔥 MODAL SLIDER
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

const images = document.querySelectorAll(".card img, .showcase img");

let currentIndex = 0;

// OPEN
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    currentIndex = index;
    showImage();
  });
});

// SHOW IMAGE
function showImage() {
  modalImg.src = images[currentIndex].src;
}

// NEXT
document.querySelector(".next").onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
};

// PREV
document.querySelector(".prev").onclick = () => {
  currentIndex =
    (currentIndex - 1 + images.length) % images.length;
  showImage();
};

// CLOSE
closeBtn.onclick = () => modal.style.display = "none";

// CLICK OUTSIDE
modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
