// There are 7 data types 6+1
// boolean
let data = true;
if (data) {
  console.log('its true');
} else {
  console.log('its false');
}
// null
let n = null;
console.log(n * 32);
// undefined
let a;
console.log(a);
console.log(a + 2); // NaN- not a number
// Number
let num = 3.6;
let ber = 6.4;
console.log(num + ber);
// String
let berr = 'Rostyk';
console.log('Hi My Name is ' + berr);
// Symbol
let sym1 = Symbol('foo');
let sym2 = Symbol('foo');
console.log(sym1 === sym2); // false
console.log(String(sym1) === String(sym2)); //true
// Object
let myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
