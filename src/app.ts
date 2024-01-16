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

  constructor(n: string) {
    this.name = n
  }

  describe(this: Department) {
    console.log('Department: ',this.name);
    
  }
}
const accounting = new Department('Accounting')
accounting.describe()

