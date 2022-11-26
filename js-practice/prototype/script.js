const person = new Object({
  // прототип обєкта
  name: 'Rostyk',
  age: 18,
  greet() {
    console.log('greet');
  },
});

Object.prototype.sayHello = function () {
  console.log('hello!');
};
// задаємо нову функцію прототипу класа
// прототип це певний обєкт який присутній в батьківський елементах і за допомогою ньогоого ми можем наслідуватись від різних обєктів і мати розширений функціонал

const Dasha = Object.create(person);
Dasha.name = 'Dasha';
// прототип іде зверху вниз. Якщо нема нічого в батьківському класі то тоді іде в прототип
