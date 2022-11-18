// const someElement = document.querySelector('.foo');

// console.log('someElement', (someElement as any).value);
// an incorecct fix
// we havent an input at all and we can fix this like below
// const someElement = document.querySelector('.foo') as HTMLInputElement;
// console.log('someElement', someElement.value);

const someElement = document.querySelector('.foo');
someElement.addEventListener('blur', (e) => {
  const target = e.target as HTMLInputElement;
  console.log('event', target.value);
});
