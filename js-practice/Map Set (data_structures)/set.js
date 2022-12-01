const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6]);

set.add(10).add(20).add(30).add(20); //ading values to the end of array

// console.log(set.has(42));
// console.log(set.size);
// console.log(set.delete(1));
// console.log(set.size);
// set.clear();
// console.log(set.size);

// the same result, bcs set is simplier data structures than map.
// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());

// for (let key of set) {
//   console.log(key);
// }

// How we can use it
// Exercise
// Write a function which will return the unique values from array

function uniqueValues(array) {
  // the same
  //   return [...new Set(array)];
  return Array.from(new Set(array));
}

console.log(
  uniqueValues([1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 6, 6, 6, 6, 6])
);
