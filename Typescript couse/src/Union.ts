interface UserInterface1 {
  name: string;
  surname: string;
}

let username: string = 'alex';

let pageName: string | number = '1';
// Recommended to use default values bcs then its will be undefined
let errorMessage: string | null = null;

let user: UserInterface1 | null = null;

let someProp: string | number | null | undefined | string[] | object;

console.log(someProp);
