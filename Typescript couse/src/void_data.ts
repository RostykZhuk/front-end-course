// We use void bcs we won't return a value from this function

const doSOmething = (): void => {
  console.log('doSomething');
};

let foo: any = 'foo';
foo = 23;

console.log(foo);
