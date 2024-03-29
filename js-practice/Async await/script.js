const delay = (ms) => {
  return new Promise((r) => setTimeout(() => r(), ms));
};

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// function fetchToDo() {
//   console.log('Fetch has started');
//   return delay(2000)
//     .then(() => fetch(url))
//     .then((response) => response.json());
// }

// fetchToDo()
//   .then((data) => {
//     console.log('Data', data);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

async function fetchAsyncTodo() {
  console.log('Fetch has started');
  try {
    await delay(2000);
    const response = await fetch(url);
    const data = await response.json();
    console.log('Data', data);
  } catch {
    console.error(e);
  }
}

fetchAsyncTodo();
