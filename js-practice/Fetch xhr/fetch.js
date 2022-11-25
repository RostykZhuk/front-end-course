const request = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json',
  };
  //GET
  //   return fetch(url).then((response) => {
  //     return response.json();
  //   });
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return response.json().then((error) => {
      const er = new Error('Somth went wrong');
      er.data = error;
      throw er;
    });
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
