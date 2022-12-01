// function calcValues(a, b) {
//   return [a + b, undefined, a * b, a / b];
// }

// // const [sum, , multy, ...other] = calcValues(42, 10);
// const [sum, sub = 'No sub', multy, ...other] = calcValues(42, 10);
// // The same
// // const sum = result[0];
// // const sub = result[1];
// // destructuring
// // const [sum, sub] = result;

// console.log(sum, multy, other);

//  Objects

const person = {
  name: 'Max',
  age: 20,
  address: {
    country: 'Ukraine',
    city: 'Lviv',
  },
};

// The same using distructuring
// const name = person.name;
// const {
//   name: firstName = 'Without name',
//   age,
//   car = 'Without car',
//   address: { city, country },
// } = person;

// const { name, ...info } = person;
// console.log(name, info);

function logPerson({ name: firstName = '111', age }) {
  console.log(firstName + ' ' + age);
}
logPerson(person);
