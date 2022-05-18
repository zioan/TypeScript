//return types & "void"

//function type number
function add(n1: number, n2: number) {
  return n1 + n2;
}

//function type string
function add2(n1: number, n2: number) {
  return n1.toString() + n2.toString();
}

//function type void
//void means a function that does not return anything
function printResult(num: number): void {
  console.log('Result: ' + num);
}

//variables can have type undefined, functions not!
let someValue: undefined;

//************************************** */

//Functions as type

// generic declaration as type Function
let combineValues2: Function;

//specify type Function that return a number
// and takes 2 number params
let combineValues: (a: number, b: number) => number;

combineValues = add;
console.log(combineValues(8, 8));

// ******************************************
//Callbacks

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
