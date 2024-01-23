type Admin = {
    name: string;
    privileges: string[]
}

type Employee = {
    name: string;
    startDate: Date;
}

// interface ElevatedEmployee extends Admin, Employee {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Max",
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable2 = string | number;
type Numeric = number | boolean;

type Universal = Combinable2 & Numeric;

function addCombinable(a: number, b: number): number;
function addCombinable(a: string, b: string): string;
function addCombinable(a: string, b: number): string;
function addCombinable(a: number, b: string): string;
function addCombinable(a: Combinable2, b: Combinable2) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b
}

const result = addCombinable('Max', ' Abakarov');
result.split(' ')

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
}
console.log(fetchedUserData?.job?.title);

const userInput = undefined;

const storedData = userInput ?? 'DEFAULT';
console.log(storedData);



// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log('Name ' + emp.name);
//     if ('privileges' in emp) {
//         console.log('Privilege: ' + emp.privileges);
//     }
//     if ('startDate' in emp) {
//         console.log('Start date:  ' + emp.startDate);
//     }
// }

// printEmployeeInformation(e1)
// printEmployeeInformation({ name: 'Manu', startDate: new Date() })

// class Car {
//     drive() {
//         console.log('Driving...');
//     };
// }

// class Truck {
//     drive() {
//         console.log('Driving a truck...');
//     };

//     loadCargo(amount: number) {
//         console.log('Loading truck...' + amount);
        
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car()
// const v2 = new Truck()

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive()
//     if (vehicle instanceof Truck) {
//         vehicle.loadCargo(2000)
//     }
// }

// useVehicle(v1)
// useVehicle(v2)

// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }
// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//     let speed;
//     switch (animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed
//             break;
//          case 'horse':
//             speed = animal.runningSpeed
//             break;
    
//         default:
//             break;
//         }
//     console.log('Moving at speed: ' + speed);
// }
// moveAnimal({ type: "bird", flyingSpeed: 10 })

// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!
// const userInputElement = <HTMLInputElement>document.getElementById('user-input') as HTMLInputElement;
// userInputElement.value = 'Hi there!'

// interface ErrorContainer { // {email: 'Not a valid email!', username: 'Must start with...'};
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email!',
//     username: 'Must start with..'
// };

