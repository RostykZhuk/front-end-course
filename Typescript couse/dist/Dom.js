// const someElement = document.querySelector('.foo');
// console.log('someElement', (someElement as any).value);
// an incorecct fix
// we havent an input at all and we can fix this like below
var someElement = document.querySelector('.foo');
console.log('someElement', someElement.value);
