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
  // private readonly id: string;
  // public name: string;
  private employees: string[] = [];

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
const accounting = new Department('d1','Accounting')
accounting.addEmployee('Max')
accounting.addEmployee('Vita')

// accounting.employees[2] = 'Anna'

accounting.describe()
accounting.printEmployeeInformation()

