// const obj = {
//   name: 'Rostyk',
//   age: 18,
//   job: 'Frontend',
// };

// const entries = [
//   ['name', 'Rostyk'],
//   ['age', 18],
//   ['job', 'Frontend'],
// ];
// // console.log(Object.entries(obj)); //converts obj to array
// // console.log(Object.fromEntries(entries)); //converts array  to obj

// const map = new Map(entries);
// // the same
// // console.log(obj.name);
// // console.log(map.get('name'));

// // Map is similar to obj. But we can use different data types for keys.
// map.set('newField', 42).set(obj, 'Value of obj').set(NaN, 'NaN ?????');
// // console.log(map.get(NaN));

// map.delete('job');
// // console.log(map.has('job'));
// console.log(map.size);
// map.clear();
// console.log(map.size);

// ===========

// for (let entry of map.entries()) {
//   console.log(entry);
// }
// for (let [key, value] of map.entries()) {
//   console.log(key, value);
// }

// for (let val of map.values()) {
//   console.log(val);
// }
// for (let key of map.keys()) {
//   console.log(key);
// }

// map.forEach((value, key, m) => {
//   console.log(value, key);
// });

//======================
// the same
// const array = [...map];
// const array = Array.from(map);

// const mapObj = Object.fromEntries(map.entries());
// console.log(mapObj);

// Exercice
// Є масив юзерів. Для кожного юзера записати час коли він переглядав сайт або статтю

const users = [{ name: 'Dasha' }, { name: 'Rostyk' }, { name: 'Liza' }];

const visits = new Map();

visits
  .set(users[0], new Date())
  .set(users[1], new Date(new Date().getTime() + 1000 * 60))
  .set(users[2], new Date(new Date().getTime() + 5000 * 60));

function lastVisit(user) {
  return visits.get(user);
}

console.log(lastVisit(users[1]));
