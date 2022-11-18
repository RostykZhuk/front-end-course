// We use void bcs we won't return a value from this function

// const doSOmething = (): void => {
//   console.log('doSomething');
// };

// let foo: any = 'foo';
// foo = 23;

// console.log(foo);
// something that will never happen
// const doSOmething = (): never => {
//   throw 'never';
// };

let vAny: any = 10;
let vUknown: unknown = 10;

let s1: string = vAny;
// error bcs ts doesnt know what type is yet
let s2: string = vUknown;

console.log(vAny.foo());
console.log(vUknown.foo());
//unknow error bcs it doent exist
