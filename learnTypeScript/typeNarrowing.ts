import { Pizza, menu, Order } from "./index";

export function getPizzaDetail(identifier: string | number): Pizza | undefined { //you can specify the possible parameter types

  if (typeof identifier === 'string') {
    return menu.find((pizza: Pizza) => pizza.name.toLowerCase() === identifier.toLowerCase());
  }
  else if (typeof identifier === 'number') {
    return menu.find((pizza: Pizza) => pizza.id == identifier);
  }
  else {
    throw new TypeError(`Parameter 'identifier' must be either a string or a number`);
  }
}