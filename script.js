const categories = [
  "CV / Resume",
  "Business Card",
  "Business Profile",
  "Website / App UI",
  "Poster / Flyer",
  "Social Media",
  "Presentation",
  "Video",
  "Logo",
  "Portfolio"
];

const content = document.getElementById("content");

categories.forEach((category, index) => {
  const section = document.createElement("div");
  section.className = "section";

  section.innerHTML = `
    <div class="section-header">
      <h2>${category}</h2>
      <span>View All →</span>
    </div>

    <div class="swiper swiper${index}">
      <div class="swiper-wrapper">
        ${generateCards()}
      </div>
    </div>
  `;

  content.appendChild(section);

  new Swiper(`.swiper${index}`, {
    slidesPerView: 2.3,
    spaceBetween: 12,
  });
});

function generateCards() {
  let cards = "";

  for (let i = 0; i < 8; i++) {
    cards += `
      <div class="swiper-slide">
        <div class="card">
          <div class="placeholder"></div>
        </div>
      </div>
    `;
  }

  return cards;
}
