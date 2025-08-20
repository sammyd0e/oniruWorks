const display = document.querySelector('.display-about');
const closeButton = document.querySelector('.bi-x');
const about = document.querySelector('.about');
const abtcommunity = document.querySelector('.display-about-community')
const community = document.querySelector('.community')
// about

about.addEventListener('click', () => {
  display.style.display = 'block';
});
closeButton.addEventListener('click', () => {
  display.style.display = 'none';
});
display.addEventListener('click', () => {
  display.style.display = 'none';
});
display.addEventListener('click', (e) => {
  if (e.target === display) {
    display.style.display = 'none';
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    display.style.display = 'none';
  }
});
// community

community.addEventListener('click', () => {
  abtcommunity.style.display = 'block';
});
closeButton.addEventListener('click', () => {
  abtcommunity.style.display = 'none';
});
abtcommunity.addEventListener('click', () => {
  abtcommunity.style.display = 'none';
});
abtcommunity.addEventListener('click', (e) => {
  if (e.target === abtcommunity) {
    abtcommunity.style.display = 'none';
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    abtcommunity.style.display = 'none';
  }
});

const images = [
  '/resources/oniru/imgs/BGM2.JPG',
  '/resources/oniru/imgs/BGM3.jpeg',
  '/resources/oniru/imgs/BGM5.JPG',
  '/resources/oniru/imgs/BGM6.jpeg',
];
let index = 0;
const section = document.getElementById('section-1');

function changeBackground() {
  section.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length;
}

setInterval(changeBackground, 15000); // Change every 5 seconds
changeBackground(); // Show first image immediately



document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide-img');
  let current = 0;

  function showSlide(index) {
    slides.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  document.getElementById('prevBtn').onclick = function() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  };

  document.getElementById('nextBtn').onclick = function() {
    current = (current + 1) % slides.length;
    showSlide(current);
  };

  showSlide(current);
});

document.addEventListener('DOMContentLoaded', function() {
  const scrollContainer = document.querySelector('.gallery-items-scrollable');
  document.getElementById('scrollLeft').onclick = function() {
    scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
  };
  document.getElementById('scrollRight').onclick = function() {
    scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
  };
});

//  events scroll
document.addEventListener('DOMContentLoaded', function() {
  // Gallery scroll
  const galleryScrollContainer = document.querySelector('.gallery-items-scrollable');
  document.getElementById('scrollLeft').onclick = function() {
    galleryScrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
  };
  document.getElementById('scrollRight').onclick = function() {
    galleryScrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
  };

  // Holder scroll
  const holderScrollContainer = document.querySelector('.holder-items-scrollable');
  document.getElementById('holderScrollLeft').onclick = function() {
    holderScrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
  };
  document.getElementById('holderScrollRight').onclick = function() {
    holderScrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
  };
});


