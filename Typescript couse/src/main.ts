// variables
// let hello = 'world';
// hello = 5 -- error bcs u can change only to the same type of data
// defining a variable already with the type
// let a: string = 'Rostyk';

const getFullName = (name: string, surname: string): string => {
  return name + ' ' + surname;
};
console.log(getFullName('Moster', 'Barack'));
