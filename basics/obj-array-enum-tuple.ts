//object
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Ioan',
  age: 35,

  //array
  hobbies: ['Sports', 'Cooking'],

  //tuple (specific to TS, an array with specific number of elements and types)
  //in JS will be a normal array
  role: [2, 'author'],
};

//tuple length cannot be modified !
// push() is an exception and does not throw an error !!!
person.role.push('admin');

// person.role[1] = 10; // Type 'number' is not assignable to type 'string'

console.log(person.role);

let favouriteActivities: string[]; //an array of strings
let favouriteActivities2: any[]; //an array of mix values

favouriteActivities2 = ['Sports', 1];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
  //console.log(hobby.map()) //!!!ERROR 'map' does not exist on type 'string'
}

// *************************************************

// ENUM

//JS
// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

// TS enum
// asign variables with numbers (imutable !)
// by default starts with 0 and auto increment values based on length
enum Role {
  ADMIN, // 0
  READ_ONLY, // 1
  AUTHOR, // 2
}

// this enum start with 5 (instead of 0) and auto increment values based on length
enum Role2 {
  ADMIN = 5,
  READ_ONLY, // 6
  AUTHOR, // 7
}

//also can have random default values, but not computed values!!!
enum Role3 {
  ADMIN = 'administrator',
  READ_ONLY = 4,
  AUTHOR = 1.6,
  RANDOM = 'abc',
}

const person2 = {
  name: 'John',
  role: Role.ADMIN,
};

if (person2.role === Role.AUTHOR) {
  console.log('is author');
}

// *************************************************

// ANY

//best to avoid using 'any'
//if type is set to 'any', the compiler cannot check anything related to this
//best use scenario is when you know what type of data will be stored
// and this data type will mutate on purpose
let randomThings: any;
