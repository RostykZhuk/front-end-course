// objects with type def
// const user: { name: string; age: number } = {
//   name: 'Monster',
//   age: 3,
// };
// const user2: { name: string; age: number } = {
//   name: 'Jack',
// };

// Interfaces

interface UserInterface {
  name: string;
  //   age? = age its not mandatory
  age?: number;
  //creating a function
  getMessage(): string;
}
const user: UserInterface = {
  name: 'Monster',
  age: 30,
  getMessage() {
    return 'Hello ' + this.name;
  },
};
const user2: UserInterface = {
  name: 'Jack',
  getMessage() {
    return 'Hello ' + this.name;
  },
};
console.log(user.getMessage(), user2.getMessage());
