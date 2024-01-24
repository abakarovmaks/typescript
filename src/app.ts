function Logger(logString: string) {
    console.log('LOGGER FACTORY');
    
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    } 
}

function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) {
        console.log('TEMPLATE FACTORY');

        const hookEl = document.getElementById(hookId)
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name
        }
    }
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My person object</h1>', 'app')
class Person2 {
    name = 'Max';

    constructor() {
        console.log('Creating person pbject...');
    }
}

const pers = new Person2();
console.log(pers);

// -----

function Log(target: any, propetyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propetyName);
}


class Product {
    @Log
    title: string;
    private _price: number;  

    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error("Invalid price - should be positive!"); 
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}