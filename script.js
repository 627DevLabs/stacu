// COUNTDOWN
const targetDate = new Date("March 29, 2026 00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff/(1000*60*60))%24);
  const m = Math.floor((diff/(1000*60))%60);
  const s = Math.floor((diff/1000)%60);

  const text = `${d}d : ${h}h : ${m}m : ${s}s`;

  document.getElementById("timerTop").innerText = text;
  document.getElementById("timerBottom").innerText = text;
}

setInterval(updateCountdown, 1000);
updateCountdown();


// 🔥 IMAGE SLIDER MODAL
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const images = document.querySelectorAll("img");

let currentIndex = 0;

// OPEN MODAL
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    currentIndex = index;
    showImage();
  });
});

function showImage() {
  modalImg.src = images[currentIndex].src;
}

// NEXT / PREV
nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
};

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
};

// CLOSE
closeBtn.onclick = () => modal.style.display = "none";

modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};


// 📱 SWIPE SUPPORT
let startX = 0;

modal.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

modal.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) nextBtn.onclick();
  if (endX - startX > 50) prevBtn.onclick();
});
