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




