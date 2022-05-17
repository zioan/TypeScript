//Union types
// a more flexible type

function combine(input1: number | string | boolean, input2: number | string) {
  let result: number | string;

  //often usig union types you need to make a runtime check
  // to avoid TS errors related to operations
  // on different data types
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combineNames = combine('John', 'Dow');
console.log(combineNames);
