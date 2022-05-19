class Department {
  static fiscalYear = 2022; //make it available outside the class as global property
  //private id: string
  // private name: string;
  protected employees: string[] = []; //protected is like private but allows inheritance

  constructor(protected readonly id: string, public name: string) {
    // this.id = id
    // this.name = n;

    //'this.' does not work on static props or methods inside class
    console.log(Department.fiscalYear);
  }

  //make it available outside the class as global method
  static createEmployee(name: string) {
    return { name: name };
  }

  //mehtods
  // describe() {
  describe(this: Department) {
    // console.log(`Department ${this.id}: ${this.name}`);
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

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

//calling a static method
const employee1 = Department.createEmployee('Sara');
console.log(employee1);

//calling a static property
console.log(Department.fiscalYear);

const it = new ITDepartment('id1', ['Tom']);
console.log(it); //an object
it.describe(); //calling 'describe' method inherited from the class
it.addEmployee('Bob');
it.addEmployee('John');
it.printEmployeeInformation();

class AccountingDepartment extends Department {
  private lastReport: string;

  //getter
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  //setter
  set mostRecentReport(value: string) {
    if (!value) {
      // return;
      throw new Error('Please pass in a value!');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  describe() {
    console.log('Accountind Department -ID', this.id);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = 'New report data...'; //set (setter)
accounting.describe();

// console.log(accounting.mostRecentReport);
accounting.addReport('Some text...');
console.log(accounting.mostRecentReport); //get (getter)

accounting.addEmployee('Max');
accounting.addEmployee('Tom');
accounting.printEmployeeInformation();

accounting.printReports();

// const accountingCopy = { name: 'test', describe: accounting.describe };
// accountingCopy.describe();
// console.log(typeof accountingCopy);
