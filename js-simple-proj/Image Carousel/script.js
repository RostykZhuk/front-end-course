const images = document.getElementById('images');
const img = document.querySelectorAll('img');
let index = 0;

function carousel() {
  index++;
  if (index > img.length - 1) {
    index = 0;
  }
  images.style.transform = `translateX(${-index * 500}px)`;
}
setInterval(carousel, 2000);
