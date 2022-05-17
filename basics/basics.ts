//development validation (compilation validation)
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // runtime regular js validation
  // if(typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!')
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let num0: number; //on variable declaration a type must be asigned
let num1 = 5; //type is inherited on variable asignment
let num2 = 2.8;
let printResult = true;
const resultPhrase = 'Result is: ';

add(num1, num2, printResult, resultPhrase);
