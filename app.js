// var msg = 'Hello World';
// console.log(msg);

// function sum(...args) {
//     let sum = 0;
//     for (let arg of args) sum += arg;
//     return sum;
//   }
  
//   let totalAmount = sum(4, 9, 16, 25, 29, 100, 66, 77);
//   console.log(totalAmount)
const msg = 'Hello World';
console.log(msg);

// Arrow function with rest parameters to calculate sum
const sum = (...args) => args.reduce((acc, val) => acc + val, 0);

const totalAmount = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(totalAmount);
