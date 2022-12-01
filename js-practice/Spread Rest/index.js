const citiesUkraine = ['Kyiv', 'Lviv', 'Lutsk', 'Rivne', 'Mykolayiv'];
const citiesEurope = ['Berlin', 'Praha', 'Paris', 'Wurzbug'];

const ukrainePopulation = {
  Kyiv: 32,
  Lviv: 30,
  lutsk: 12,
  Rivne: 15,
  Mykolayiv: 7,
};
const europePopulation = {
  Berlin: 132,
  Praha: 50,
  Paris: 85,
  Wurzbug: 20,
};
console.log(...citiesUkraine);
console.log(...citiesEurope);

// ====================
// clone the massive or modify it. Spread operator: massive,objects
// with concat operator we can work only with massives
// The same
// const allCities = [...citiesUkraine, 'Budapesht', ...citiesEurope];
const allCities = citiesEurope.concat(citiesUkraine);
console.log(allCities);

// Spread with objects
// creaating an object
// console.log({ ...ukrainePopulation });
// Merging objects
// Якшо в оюєктів є однакові ключі, то при мержуванні запишеться ключ з останнього оюєкта
// console.log({ ...ukrainePopulation, ...europePopulation });

// practice

// const numbers = [5, 42, 37, 17];
// // console.log(Math.max(numbers)); NaN
// // The same
// console.log(Math.max(...numbers));
// console.log(Math.max.apply(null, numbers));

// const divs = document.querySelectorAll('div');
// const nodes = [...divs];

//Rest
// function sum(a, b, ...rest) {
//   return a + b + rest.reduce((a, i) => a + i, 0);
// }
// const numbers = [1, 2, 3, 4, 5];
// console.log(sum(...numbers));

// The same
// const a = numbers[0];
// const b = numbers[1];
// distructuring
// const [a, b, ...other] = numbers;
// console.log(a, b, other);

// const person = {
//   name: 'Max',
//   age: 20,
//   city: 'Lviv',
//   country: 'Ukraine',
// };
// // destructuring
// const { name, age, ...adress } = person;
// console.log(name, age, adress);
