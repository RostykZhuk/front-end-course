// Оголошення var мають глобальну область видимості або область функції, тоді як let і const мають блокову область видимості.
// Змінні var можна оновити та переголосити в межах їхньої області; змінні let можна оновити, але не переголосити; змінні const не можна ні оновити, ні переголосити.
// Усі вони підіймаються наверх своєї області. Але тоді як змінні var ініціалізуються з undefined, змінні let і const не ініціалізуються.
// Хоча var і let можуть бути оголошені без ініціалізації, const повинна бути ініціалізована під час оголошення.

// var
// var tester = 'hey hi';

// function newFunction() {
//   var hello = 'hello';
// }
// console.log(hello); // error: hello is not defined
// // обмежується зоною видимості функції

// ------
// let
// console.log(greeter);
// var greeter = 'say Hello';

// let greeting = 'say Hi';
// let times = 4;

// if (times > 3) {
//   let hello = 'say Hello instead';
//   console.log(hello); // "say Hello instead"
// }
// console.log(hello); // hello is not defined

// const
const constt = {
  message: 'say Hi',
  times: 4,
};
constt.message = 'say Hello instead';
console.log(constt.message);

const array = [1, 2, 3];
array[0] = 444;
console.log(array);
