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

class Department {
  // private readonly id: string;
  // public name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n
  }

  describe(this: Department) {
    console.log(`Department (${this.id}) : ${this.name}`); 
  }
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
}

class AccountingDepartment extends Department {
  private lastReport: string;

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

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting')
    this.lastReport = reports[0]
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

const it = new ITDepartment('d1', ['Maxym adm'])

it.addEmployee('Max')
it.addEmployee('Vita')

// it.employees[2] = 'Anna'

it.describe()
it.name = 'NEW NAME'
it.printEmployeeInformation()

console.log(it);

const accounting = new AccountingDepartment('d2', []);
accounting.mostRecentReport = 'Annual report';
accounting.addReport('Something went wrong...')
console.log(accounting.mostRecentReport);

accounting.addEmployee('Maxu')
accounting.addEmployee('Manu')

accounting.getReports()
accounting.printEmployeeInformation()


