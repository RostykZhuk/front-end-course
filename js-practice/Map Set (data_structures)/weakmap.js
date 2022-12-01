// let obj = { name: 'Weakmap' };
// // const arr = [obj];
// // obj = null;
// // console.log(obj);
// // допомагає уникат  витіку даних

// const map = new WeakMap([[obj, 'obj data']]);
// // get set delete has
// obj = null;
// console.log(map.get(obj));
// console.log(map.has(obj));

// ====
// Exercise

const cache = new WeakMap();
function cacheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now());
  }
  return cache.get(user);
}

let dasha = { name: 'Dasha' };
let rostyk = { name: 'Rostyk' };

cacheUser(dasha);
cacheUser(rostyk);

dasha = null;
console.log(cache.has(rostyk));
console.log(cache.has(dasha));
