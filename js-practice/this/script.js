function hello() {
  console.log('Hello', this);
}

const person = {
  name: 'Rostyk',
  age: 25,
  sayHello: hello,
  sayHelloWondow: hello.bind(document),
  logInfo(job, phone) {
    // Создаёт новую группу сообщений в веб-консоли. После вызова последующие сообщения, выводимые в консоль, будут иметь дополнительный уровень отступа, до тех пор пока не будет вызван метод console.groupEnd()

    console.group(`${this.name} info:`);
    console.log(`Name - ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  },
};

const girl = {
  name: 'Dasha',
  age: 19,
};
// const fnGirlInfoLog = person.logInfo.bind(
//   girl,
//   'High Heels Dancer',
//   '00-999-888-777'
// )();
// bind returns new function which get a new context
person.logInfo.call(girl, 'High Heels Dancer', '00-999-888-777');
// call returns new function which get a new context and call it as well
person.logInfo.apply(girl, ['High Heels Dancer', '00-999-888-777']);
// the same as call but only 2 argument it can have

// ==========
// how we can combine context and prototypes

const array = [1, 2, 3, 4, 5];

// function multy(arr, n) {
//   return arr.map((x) => {
//     return n * x;
//   });
// }
// console.log(multy(array, 15));

// u dont need to write an else function to every new array
Array.prototype.multy = function (n) {
  // console.log('multy', this); // this == array
  return this.map((x) => {
    return n * x;
  });
};
console.log(array.multy(2));
