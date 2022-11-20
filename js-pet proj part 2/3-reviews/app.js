// local reviews data
const data = [
  {
    id: 1,
    name: 'Jurica Koletić',
    job: 'Backend developer',
    img: '1.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'ui ux designer',
    img: '2.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'DevOps',
    img: '3.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'Stephanie Liverani',
    job: 'Frontend developer',
    img: '4.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
const personImage = document.getElementById('person-img');
const job = document.getElementById('job');
const author = document.getElementById('author');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randBtn = document.querySelector('.random-btn');

let currentData = 0;

window.addEventListener('DOMContentLoaded', () => {
  setData(currentData);
});

const setData = (person) => {
  const item = data[currentData];
  personImage.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

nextBtn.addEventListener('click', () => {
  currentData++;
  if (currentData > data.length - 1) {
    currentData = 0;
  }
  setData();
});
prevBtn.addEventListener('click', () => {
  currentData--;
  if (currentData < 0) {
    currentData = data.length - 1;
  }
  setData();
});

randBtn.addEventListener('click', () => {
  currentData = Math.floor(Math.random() * data.length);
  setData();
});
