const colors = [
  'green',
  'red',
  'rgba(133,122,200)',
  'orange',
  'blue',
  'pink',
  'green',
];

const btn = document.getElementById('btn');
const color = document.getElementById('color');

btn.addEventListener('click', () => {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// function to generate a random number
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
