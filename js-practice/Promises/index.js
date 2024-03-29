console.log('Request data');

// // callbackHell
// setTimeout(() => {
//   console.log('Preparing data...');
//   const backendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working',
//   };

//   setTimeout(() => {
//     backendData.modified = true;
//     console.log('Data receiver', backendData);
//   }, 2000);
// }, 2000);
// -------------------------------------------------
// promises

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Preparing data...');
    const backendData = {
      server: 'aws',
      port: 2000,
      status: 'working',
    };
    resolve(backendData);
  }, 2000);
});
p.then((data) => {
  //   const p2 = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       data.modified = true;
  //       resolve(data);
  //     }, 2000);
  //   });
  //   p2.then((clientData) => {
  //     console.log('Data receiver', clientData);
  //   });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true;
      resolve(data);
    }, 2000);
  })
    .then((clientData) => {
      console.log('Data receiver', clientData);
      clientData.fromPromise = true;
      return clientData;
    })
    .then((data) => {
      console.log('Modified', data);
    })
    .catch((err) => console.log('eroor', err))
    .finally(() => {
      console.log('Finally');
    });
});
// -------------------
// const sleep = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(), ms);
//   });
// };
// // sleep(2000).then(() => console.log('After 2 seconds'));
// // sleep(3000).then(() => console.log('After 3 seconds'));
// // All promises executes
// // Promise.all([sleep(2000), sleep(5000)]).then(() => {
// //   console.log('All promises');
// // });
// // First promises executes
// Promise.race([sleep(2000), sleep(5000)]).then(() => {
//   console.log('Race promises');
// });
