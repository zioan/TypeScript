// const & let
const userName = 'Ioan';
// userName = 'John'
let age = 30;
age = 25;

const add = (n1: number, n2: number = 5) => {
  return n1 + n2;
};

console.log(add(2, 4));
console.log(add(5));

const add2 = (n1: number, n2: number) => n1 + n2;

// **************************************************
// spread operator - arrays
const hobbies = ['Sports', 'Cooking'];

const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);

const activeHobbies2 = ['Hiking', ...hobbies];

console.log(activeHobbies);

// **************************************************
// spread operator - objects
const person = {
  name: 'Ioan',
  age: 35,
};

const copiedPerson = { ...person };

// **************************************************
// rest parameters
const add3 = (...numbers: number[]) => {
  // for (number in numbers){......}
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addNumbers = add3(5, 10, 2, 3.7);
console.log(addNumbers);

// **************************************************
// array destructuring
const hobbiesNew = ['Sports', 'Cooking'];

// const hobby1 = hobbiesNew[0]
// const hobby2 = hobbiesNew[1]

const [hobby1, hobby2] = hobbiesNew;
const [hobbyA, hobbyB, ...remailHobbies] = hobbiesNew;

// **************************************************
// object destructuring
const person2 = {
  firstName: 'Bob',
  personAge: 23,
};

const { firstName: userName2, personAge } = person2;
console.log(userName2, personAge);
