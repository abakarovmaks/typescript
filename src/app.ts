// const names: Array<string> = [];
// // names[0].split(' ')

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!')
//     }, 2000);
// })

// promise.then(data => {
//     console.log(data.split(' '));
// })

function merge<T extends Object, U>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}
const mergeObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 31 });
console.log(mergeObj.age);

interface Lenghty {
    length: number;
}

function countAndDescribe<T extends Lenghty>(element: T): [T, string] {
    let descriptiontext = 'Got no value.'
    if (element.length === 1) {
        descriptiontext = 'Got 1 element.'
    } else if (element.length > 1) {
        descriptiontext = 'Got ' + element.length + ' elements.'
    }
    return [element, descriptiontext]
}
console.log(countAndDescribe('Hi there!'));

function extractAndConvert<T extends Object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key]
}
extractAndConvert({name: 'Max'}, 'name')

class DataStorage<T extends string | number | boolean> {
    private data: T[] = []

    addItem(item: T) {
        this.data.push(item)
    }
    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return
        }
        this.data.splice(this.data.indexOf(item), 1)
    }
    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max')
textStorage.addItem('Manu')
textStorage.removeItem('Max')
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({name: 'Max'})
// objectStorage.addItem({name: 'Manu'})
// objectStorage.removeItem({ name: 'Max' })
// console.log(objectStorage.getItems());





