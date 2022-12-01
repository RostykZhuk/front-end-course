// const myNumber = 42;
// local storage only with strings
// localStorage.removeItem('number');
// console.log(localStorage.getItem('number'));
// localStorage.setItem('number', myNumber.toString());
// console.log(localStorage.getItem('number'));
// localStorage.clear();
const object = {
  name: 'Max',
  age: 24,
};

// localStorage.setItem('person', JSON.stringify(object));

const raw = localStorage.getItem('person');
const person = JSON.parse(raw);
person.name = 'rostyk';
// console.log(person);
// ==========
// Practice
// if our proj is opened in different tabs we can synchronise it

window.addEventListener('storage', (event) => {
  console.log(event);
});
