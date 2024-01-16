// let userInput: unknown;
// let userName: string;

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
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n
  }

  describe(this: Department) {
    console.log('Department: ',this.name); 
  }
  addEmployee(employee: string) {
    this.employees.push(employee) 
  }
  printEmployeeInformation() {
    console.log(this.employees.length); 
    console.log(this.employees); 
  }
}
const accounting = new Department('Accounting')
accounting.addEmployee('Max')
accounting.addEmployee('Vita')

// accounting.employees[2] = 'Anna'

accounting.describe()
accounting.printEmployeeInformation()

