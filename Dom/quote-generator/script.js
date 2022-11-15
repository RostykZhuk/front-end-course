const btn = document.getElementById('new-quote');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');

const quotes = [
  {
    quote: `"All our dreams can come true, if we have the courage to pursue them."`,
    person: ` Walt Disney`,
  },
  {
    quote: `"Trying to do it all and expecting that it can be done exactly right is a recipe for disappointment. Perfection is the enemy."`,
    person: `Sheryl Sandberg`,
  },
  {
    quote: `"When you’re high on inspiration, you can get two weeks worth of work done in twenty-four hours."`,
    person: `Jason Fried & David Heinemeier Hansson`,
  },
  {
    quote: `"Your time is limited, so dont waste it living someone else's life."`,
    person: ` Steve Jobs`,
  },
  {
    quote: `"Nothing is particularly hard if you divide it into small jobs."`,
    person: ` Henry Ford`,
  },
  {
    quote: `"Corporate culture matters. How management chooses to treat its people is everything – for better or for worse."`,
    person: `Simon Sinek`,
  },
  {
    quote: `"How you climb a mountain is more important than reaching the top."`,
    person: `Yvon Chouinard`,
  },
  {
    quote: `"Opportunity is missed by most people because it is dressed in overalls and looks like work."`,
    person: `Thomas Edison`,
  },
  {
    quote: `"Do the best until you know better. Then when you know better, do better."`,
    person: `Maya Angelou`,
  },
  {
    quote: `"Only put off until tomorrow what you are willing to die having left undone."`,
    person: `Pablo Picasso`,
  },
];

btn.addEventListener('click', () => {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
