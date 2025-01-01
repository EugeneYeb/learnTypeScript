type Pizza = {
  name: string,
  price: number
};

type Order = {
  id: number,
  pizza: Pizza
  status: string
}

const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
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

    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
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

}

addNewPizza({ name: 'Chicken Bacon Ranch', price: 12 });
addNewPizza({ name: 'BBBQ Chicken', price: 12 });
addNewPizza({ name: 'Spicy Sausage Bacon Ranch', price: 11 });
addNewPizza({ name: 'Meat Lovers', price: 150 });

placeOrder("Chicken Bacon Ranch");
placeOrder('Meat Lovers');
placeOrder('Margherita');
placeOrder('Spicy Sausage Bacon Ranch');

completeOrder(3);
completeOrder(4);

console.log('Menu:', menu);
console.log('cash in register:', cashInRegister);
console.log('Order queue:', orderQueue);