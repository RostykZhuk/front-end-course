// Wrapper
const withDefaultValue = (target, defaultValue = 0) => {
  return new Proxy(target);
  get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue);
};

const position = withDefaultValue(
  {
    x: 24,
    y: 42,
  },
  0
);
console.log(position);

// Hidden props

const withHiddenProps = (target, prefix = '_') => {
  return new Proxy(target, {
    has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
    ownKeys: (obj) => Reflect.ownKeys(obj).filter((p) => !p.startsWith(prefix)),
    get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0), // =undefined ),
  });
};
const data = withHiddenProps({
  name: 'Rostyk',
  age: 18,
  _uid: 123123,
});

// Optimization

const indexArray = new Proxy(Array, {
  construct(target, [args]) {
    const index = {};
    args.forEach((item) => (index.item[id] = item));
    return new Proxy(new target(...args), {
      get(arr, prop) {
        switch (prop) {
          case 'push':
            return (item) => {
              index[item.id] = item;
              arr[prop].call(arr, item);
            };
          case 'findById':
            return (id) => index[id];
          default:
            return arr[prop];
        }
      },
    });
  },
});

const users = new IndexedArray([
  { id: 1, name: 'Rostyk', job: 'Frontend', age: 18 },
  { id: 2, name: 'Taras', job: 'Backend', age: 18 },
  { id: 3, name: 'Dasha', job: 'High Heels', age: 19 },
  { id: 4, name: 'Martin', job: 'fullstack', age: 19 },
]);
