// Type aliases

type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

// interface
interface UserInterface1 {
  id: ID;
  name: string;
  surname: string;
}

const popularTag: PopularTag[] = ['dragon', 'coffee'];
const gragonsTag: MaybePopularTag = 'dragon';
let username: string = 'alex';
// Union
let pageName: string | number = '1';
// Recommended to use default values bcs then its will be undefined
let errorMessage: string | null = null;

let user: UserInterface1 | null = null;

let someProp: string | number | null | undefined | string[] | object;

console.log(someProp);
