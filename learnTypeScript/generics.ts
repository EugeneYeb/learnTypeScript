const gameScores = [14, 21, 33, 42, 59];
const favoriteThings = ['raindrops on oses', 'whiskers on kitten', 'bright copper kettles', 'warm woolen mittens'];
const voters = [{ name: 'Alice', age: 42 }, { name: 'Bob', age: 77 }];

// undefined in case we have an array of length 0

function getLastItem<Type>(array: Type[]): Type | undefined {
  return array[array.length - 1];
}

console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));