export type Pizza = {
  id: number,
  name: string,
  price: number
};

export type Order = {
  id: number,
  pizza: Pizza,
  status: 'ordered' | 'completed'
}

export const menu: Pizza[] = [
  { id: 1, name: 'Margherita', price: 8 },
  { id: 2, name: 'Pepperoni', price: 10 },
  { id: 3, name: 'Hawaiian', price: 10 },
  { id: 4, name: 'Veggie', price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue: Order[] = [];

function addNewPizza(pizzaObject: Pizza) {
  menu.push(pizzaObject);
}

function placeOrder(pizzaName: string) {

  const selectedPizza = menu.find((pizzaObject: Pizza) => pizzaObject.name === pizzaName);

  if (selectedPizza) {

    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: 'ordered' };
    orderQueue.push(newOrder);
    cashInRegister += selectedPizza.price;
    return orderQueue;

  }
  else {
    return console.error(`${pizzaName} does not exist in the menu`);
  }
}

function completeOrder(orderId: number) {

  const order = orderQueue.find((order) => order.id === orderId);

  if (order) {
    order.status = 'completed';
    return order;
  }
  else {
    return console.error(`Order id: ${orderId} not found in queue.`);
  }

}

addNewPizza({ id: 5, name: 'BBBQ Chicken', price: 12 });
addNewPizza({ id: 6, name: 'Spicy Sausage Bacon Ranch', price: 11 });
addNewPizza({ id: 7, name: 'Meat Lovers', price: 150 });
addNewPizza({ id: 8, name: 'Chicken Bacon Ranch', price: 12 });

placeOrder('Chicken Bacon Ranch');
placeOrder('Meat Lovers');
placeOrder('Margherita');
placeOrder('Spicy Sausage Bacon Ranch');

completeOrder(3);
completeOrder(4);

console.log('Menu:', menu);
console.log('cash in register:', cashInRegister);
console.log('Order queue:', orderQueue);

