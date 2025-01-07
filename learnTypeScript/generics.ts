const gameScores = [14, 21, 33, 42, 59];
const favoriteThings = ['raindrops on oses', 'whiskers on kitten', 'bright copper kettles', 'warm woolen mittens'];
const voters = [{ name: 'Alice', age: 42 }, { name: 'Bob', age: 77 }];

function getLastItem<PlaceHolderType>(array: PlaceHolderType[]) {
  return array[array.length - 1];
}

getLastItem(gameScores)