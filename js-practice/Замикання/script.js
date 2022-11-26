// Замикання це функція всередині 2 функції
function createCalcFunction(n) {
  return function () {
    console.log(1000 * n);
  };
}
const calc = createCalcFunction(42);
calc();
//  ==========

function createIncrementor(n) {
  return function (num) {
    return n + num;
  };
}
const addOne = createIncrementor(1);
const addTen = createIncrementor(10);
console.log(addOne(19));
console.log(addTen(19));
//  використовуємо 1 головною функцію де замикаєм  1 значення на виході получаєм 2 функцію яка може працювавти зщ іншими параметрами
function urlGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`;
  };
}
const comUrl = urlGenerator('com');
const uaUrl = urlGenerator('ua');
console.log(comUrl('netflix'));
console.log(uaUrl('bcaa'));
// =======
// function myGen(dom) {
//   return function (i) {
//     console.log(`https://${i}.${dom}`);
//   };
// }
// const calc = myGen('ua');
// calc('softserve');

// Interwiew crack

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args);
  };
}
function logPerson() {
  console.log(`Person :${this.name},${this.age},${this.job}`);
}

const person1 = { name: 'Misha', age: 22, job: 'Backend' };
const person2 = { name: 'Pasha', age: 21, job: 'Fullstack' };
bind(person1, logPerson)();
bind(person2, logPerson)();
