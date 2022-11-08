let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let is_shop_open = true;

async function order() {
  try {
    await a;
  } catch (error) {
    console.log('a doesnt exist');
  } finally {
    console.log('runs code anyways');
  }
}
order().then(() => {
  console.log('order placed');
});
