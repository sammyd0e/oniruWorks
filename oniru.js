const display = document.querySelector('.display-about');
const closeButton = document.querySelector('.bi-x');
const about = document.querySelector('.about');

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


const images = [
  '/resources/oniru/imgs/stass-02.jpg',
  '/resources/oniru/imgs/BACKGROUND.png',
  '/resources/oniru/imgs/backgroud-biography.webp'
];
let index = 0;
const section = document.getElementById('section-1');

function changeBackground() {
  section.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length;
}

setInterval(changeBackground, 3000); // Change every 3 seconds
changeBackground(); // Show first image immediately