// let userInput: unknown;
// let userName: string;

import { log } from "console";

// userInput = 5;
// userInput = 'Max';
// if (typeof userInput === 'string') {
//   userName = userInput;
// }

// function generateError(message: string, code: number): never {
//   throw { message: message, errorCode: code };
// }

// generateError('An error occurred!', 404);

abstract class Department {
  static fiscalYear = 2024;
  // private readonly id: string;
  // public name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = n
  }

  static createEmployee(name: string) {
    return {name: name}
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee) 
  }
  printEmployeeInformation() {
    console.log(this.employees.length); 
    console.log(this.employees); 
  }
}



class ITDepartment extends Department {
  admins: string[]
  constructor(id: string, admins: string[]) {
    super(id, 'IT')
    this.admins = admins;
  }
  describe() {
     console.log('IT department - ID: ' + this.id);
  };
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass a valid value");
    }
    this.addReport(value)
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting')
    this.lastReport = reports[0]
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', [])
    return this.instance;
  }

  describe() {
    console.log('Accounting department - ID: ' + this.id); 
  }
  
  addReport(text: string) {
    this.reports.push(text)
    this.lastReport = text;
  }
  getReports() {
    console.log(this.reports);
  }
  addEmployees(name: string) {
    if (this.name === 'Max') {
      return;
    }
    this.employees.push(name)
  }
}
const employee1 = Department.createEmployee('Terro')
console.log(employee1, Department.fiscalYear);


const it = new ITDepartment('d1', ['Maxym adm'])

it.addEmployee('Max')
it.addEmployee('Vita')

// it.employees[2] = 'Anna'

it.describe()
it.name = 'NEW NAME'
it.printEmployeeInformation()

console.log(it);

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance()
const accounting2 = AccountingDepartment.getInstance()
console.log(accounting, accounting2);


accounting.mostRecentReport = 'Annual report';
accounting.addReport('Something went wrong...')
console.log(accounting.mostRecentReport);

accounting.addEmployee('Maxu')
accounting.addEmployee('Manu')

// accounting.getReports()
// accounting.printEmployeeInformation()
accounting.describe()


