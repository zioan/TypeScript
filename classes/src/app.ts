class Department {
  //private id: string
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id
    // this.name = n;
  }

  //mehtods
  // describe() {
  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    //validation etc.
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('id1', 'Accounting');
console.log(accounting); //an object

accounting.describe(); //calling 'describe' method inherited from the class

// //create an object that inherit a class method
// const accountingCopy = { name: 'test', describe: accounting.describe };
// accountingCopy.describe();
// console.log(typeof accountingCopy);

accounting.addEmployee('Bob');
accounting.addEmployee('John');

accounting.printEmployeeInformation();
