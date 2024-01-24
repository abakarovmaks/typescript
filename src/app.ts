function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    } 
}

function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) {
        const hookEl = document.getElementById(hookId)
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name
        }
    }
}

// @Logger('LOGGING - PERSON')
@WithTemplate('<h1>My person object</h1>', 'app')
class Person2 {
    name = 'Max';

    constructor() {
        console.log('Creating person pbject...');
    }
}

const pers = new Person2();
console.log(pers);
