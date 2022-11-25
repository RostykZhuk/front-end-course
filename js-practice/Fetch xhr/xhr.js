const request = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
  //third argument for the "POST"
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    // the same below
    // xhr.onload = () => {
    //   console.log(JSON.parse(xhr.response));
    // }; // converting to objects

    xhr.onerror = () => {
      reject(xhr.response);
    };
    xhr.send(JSON.stringify(body));
  });
}
// sendRequest('GET', request)
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });

const body = {
  name: 'Rostyslav',
  age: 18,
};
sendRequest('POST', request, body)
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });
