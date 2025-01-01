type Food = string;

type Address = {
  street: string,
  city: string,
  country: string
}

let favoriteFood: Food = "pizza";

type Person = {
  name: string,
  age: number,
  isStudent: boolean,
  address: Address
}

let person1: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
  address: {
    street: '123',
    city: 'City',
    country: 'USA'
  }
}
let person2: Person = {
  name: "Jill",
  age: 66,
  isStudent: false,
  address: {
    street: '123',
    city: 'City',
    country: 'USA'
  }
}

// Making properties optional, you add the question mark '?' at the end of the property name
type PersonWithOptionalAddress = {
  name: string,
  age: number,
  isStudent: boolean,
  address?: Address
}

let person6: PersonWithOptionalAddress = {
  name: "Jill",
  age: 66,
  isStudent: false,
}
let person7: PersonWithOptionalAddress = {
  name: "Jill",
  age: 66,
  isStudent: false,
}