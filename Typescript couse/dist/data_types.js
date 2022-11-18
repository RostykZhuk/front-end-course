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
var vAny = 10;
var vUknown = 10;
var s1 = vAny;
// error bcs ts doesnt know what type is yet
// Converting unknow to string
var s2 = vUknown;
var pageNumber = '1';
var numericPageNumber = pageNumber;
// console.log(vAny.foo());
// console.log(vUknown.foo());
//unknow error bcs it doent exist
