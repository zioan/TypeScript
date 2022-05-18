//unknown type

//can store any value without errors
// it cannot be asignable to other variable
// eg. userName = userInput;
// in this case 'any' should be used
//'unknown' is more restrictive than 'any'
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'John';

//however, if an extra check is made,
// this asignment can be made
if (typeof userInput === 'string') {
  userName = userInput;
}

// ***************************************

//never type

//never returns anything
// default have a type of 'void' but also 'never'
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('An error occured!', 500);
