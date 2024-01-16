// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

function printResult(num: number) {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

// printResult(add(5, 2));

let combineValues: (a: number, b: number) => number;

// combineValues = add;
// combineValues = printResult;

// console.log(combineValues(7, 7));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
