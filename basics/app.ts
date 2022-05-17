//return types & "void"

//function type will be number
function add(n1: number, n2: number) {
  return n1 + n2;
}

//function type will be string
function add2(n1: number, n2: number) {
  return n1.toString() + n2.toString();
}

//function type will be void
//void means a function that does not return anything
function printResult(num: number) {
  console.log('Result: ' + num);
}
