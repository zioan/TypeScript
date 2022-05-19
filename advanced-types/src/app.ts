// intersection types (allow to combine types)
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

interface ElevatedEmployee2 extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Ioan',
  privileges: ['developer'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// ***********************************************
//type guards (check for types)

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

//
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);

  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }

  if ('startDate' in emp) {
    console.log('Starting Date: ' + emp.startDate);
  }
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: 'Tom', startDate: new Date() });

//
class Car {
  drive() {
    console.log('driving a car...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  // if ('loadCargo' in vehicle) {
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(500);
  }
}

useVehicle(v1);
useVehicle(v2);

// *******************************************************
//discriminated unions
// makes implementing type guards easier
// means a common property that describe the object
// in this case 'type', can be anything

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving with speed:' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });
moveAnimal({ type: 'horse', runningSpeed: 200 });

// *******************************************************
//type casting

//TS DON'T know what element it is or if exists
// const userInputElement = document.getElementById('user-input');

//type casting example 1
const userInputElement = <HTMLInputElement>(
  document.getElementById('user-input')!
);

//type casting example 2 (React like)
const userInputElement2 = document.getElementById(
  'user-input'
)! as HTMLInputElement;

//'!' at the end of of statement means that something will never be null,
userInputElement.value = 'Hello';
userInputElement2.value = 'Bob';

// *******************************************************
//index properties

//help creating objects that are more flexible
// when you don't know what properties will have
// or the number of properies
// 'prop:' can be anything

//{ email: 'Not a valid email', username: 'Must start with a character' }
//[notDefinedProperyNameOrHowMany : thatHaveTypeString] :holdValueOfTypeString
//id: string
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  userName: 'Must start with a capital character',
  testProperty: 'a string',
};

// *******************************************************
//function overloads

function addFunc(n1: number, n2: number): number;
function addFunc(a: string, b: string): string;

function addFunc(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = addFunc(1, 5);
const result2 = addFunc('Ioan', ' Zaharia');
result2.split('');

// *******************************************************
//optional chaining (check if data exists)

type Job = {
  title?: string;
  description?: string;
};

type UserData = {
  id: string;
  name: string;
  job?: Job;
};

const fetchedUserData: UserData = {
  id: 'u1',
  name: 'ioan',
  // job: {},
  // job: { title: 'CEO', description: 'My own company' },
};

// check if data in JS
//console.log(fetchUserData.job && fetchUserData.job.title);

// check if data with optional chaining in TS
console.log(fetchedUserData?.job?.title);

// *******************************************************
//nullish coalescing
// not knowing if a data is null, false value, undefined

let userInput = null;
userInput = '';

// in JS this is null/false  || 'default value' => 'default value'
const storedData = userInput || 'default value';

// in TS, in this way, the '""' does not means null/undefined
const storedData2 = userInput ?? 'default value';
console.log(storedData2);
