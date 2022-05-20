//generics (a type that connects to other types)

// const names1: Array<string | number> = ['John', 'Tom'];
// const names: Array<string> = ['John', 'Tom']; // string[]
// names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// ****************************************************
//creating a generic function
function mergeObj(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

console.log(mergeObj({ name: 'Ioan' }, { age: 20 }));
