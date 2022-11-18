// objects with type def
// const user: { name: string; age: number } = {
//   name: 'Monster',
//   age: 3,
// };
// const user2: { name: string; age: number } = {
//   name: 'Jack',
// };
var user_1 = {
    name: 'Monster',
    age: 30,
    getMessage: function () {
        return 'Hello ' + this.name;
    }
};
var user_2 = {
    name: 'Jack',
    getMessage: function () {
        return 'Hello ' + this.name;
    }
};
console.log(user_1.getMessage(), user_2.getMessage());
