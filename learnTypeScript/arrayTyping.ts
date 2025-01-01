let ages: number[] = [100, 101];

type PersonType3 = {
  name: string,
  age: number,
  isStudent: boolean,
}

let person10: PersonType3 = {
  name: 'Joe',
  age: 24,
  isStudent: true
}
let person11: PersonType3 = {
  name: 'Jill',
  age: 26,
  isStudent: false
}

let people: PersonType3[] = [person10, person11];
// let peoples: Array<PersonType3> = [person10, person11]; <= Another way of saying the same thing.

// https://youtu.be/SpwzRDUQ1GI?feature=shared&t=3121