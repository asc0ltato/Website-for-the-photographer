const header = document.querySelector('header');
const slider = document.querySelector('.slider');
const images = slider.getElementsByTagName('img');
let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  header.classList.add('fade-in'); 
  header.style.backgroundImage = `url('${images[currentIndex].src}')`;
  setTimeout(() => {
    header.classList.remove('fade-in'); 
  }, 2000);
}, 3000);