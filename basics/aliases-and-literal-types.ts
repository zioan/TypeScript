//Type Aliases
type Combinable = number | string;
type MyCustomType = number | string | boolean;
type ConverionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: MyCustomType,
  input2: Combinable,

  //Literal Types
  // resultConversion: 'as-number' | 'as-text'
  resultConversion: ConverionDescriptor
) {
  let result: number | string;

  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  //using Literal Types
  if (resultConversion === 'as-number') {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine(30, 26, 'as-number');
console.log(combinedStringAges);

const combineNames = combine('John', 'Dow', 'as-text');
console.log(combineNames);

//****************************************** */

//Aliases examples
type User1 = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!

// this example
function greet1(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}

function isOlder1(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}

//can be simplified with
type User = { name: string; age: number };

function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
