// function square(num) {
//   return num * num;
// }
// console.log(square(4));

// let someVar = 'hat';
// function myFun() {
//   let someVar = 'shoes';
//   console.log(someVar);
// }
// myFun();
// console.log(someVar);

//Nesting a fuction
function addSquare(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
let a = addSquare(2, 3);
let b = addSquare(3, 4);
let c = addSquare(4, 5);
