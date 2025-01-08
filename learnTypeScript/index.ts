export type Pizza = {
  id: number,
  name: string,
  price: number
};

type CreatePizza = Partial<Pizza>;

export type Order = {
  id: number,
  pizza: Pizza,
  status: 'ordered' | 'completed'
}

//Global variable declarations
let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId: number = 1;
const orderQueue: Order[] = [];

export const menu: Pizza[] = [
  { id: nextPizzaId++, name: 'Margherita', price: 8 },
  { id: nextPizzaId++, name: 'Pepperoni', price: 10 },
  { id: nextPizzaId++, name: 'Hawaiian', price: 10 },
  { id: nextPizzaId++, name: 'Veggie', price: 9 },
];

function addNewPizza(pizzaObject: Omit<Pizza, 'id'>): Pizza {
  const newPizza: Pizza = {
    id: nextPizzaId++,
    ...pizzaObject
  }
  menu.push(newPizza);
  return newPizza;
}

addNewPizza({ name: 'BBBQ Chicken', price: 12 });
addNewPizza({ name: 'Spicy Sausage Bacon Ranch', price: 11 });
addNewPizza({ name: 'Meat Lovers', price: 150 });
addNewPizza({ name: 'Chicken Bacon Ranch', price: 12 });

function placeOrder(pizzaName: string): Order | void {

  const selectedPizza: Pizza | undefined = menu.find((pizzaObject: Pizza) => pizzaObject.name === pizzaName);

  if (selectedPizza) {

    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: 'ordered' };
    orderQueue.push(newOrder);
    cashInRegister += selectedPizza.price;
    return newOrder;

  }
  else {
    return console.error(`${pizzaName} does not exist in the menu`);
  }
}

function completeOrder(orderId: number): Order | void {

  const order: Order | undefined = orderQueue.find((order) => order.id === orderId);

  if (order) {
    order.status = 'completed';
    return order;
  }
  else {
    return console.error(`Order id: ${orderId} not found in queue.`);
  }

}


placeOrder('Chicken Bacon Ranch');
placeOrder('Meat Lovers');
placeOrder('Margherita');
placeOrder('Spicy Sausage Bacon Ranch');

completeOrder(3);
completeOrder(4);

console.log('Menu:', menu);
// console.log('cash in register:', cashInRegister);
// console.log('Order queue:', orderQueue);

function addToArray<T>(array: T[], item: T): T[] {
  array.push(item);
  return array;
}
// function addToArray(array: Pizza[], item: Pizza) {
//   array.push(item);
//   return array;
// }

addToArray<Pizza>(menu, { id: nextPizzaId++, name: 'Im hungry Pizza', price: 15 });
addToArray<Order>(orderQueue, { id: nextPizzaId++, pizza: menu[2], status: 'completed' });
// console.log(menu);
// console.log(orderQueue);