//make an arrow function that adds 100 to any input

// let sum_Num = num => num + 100;

// console.log(sum_Num(10));





// let fun = (num1, num2) => (num1 + num2 + 100);

// console.log(fun(1, 2));



// let addTwo = makeAdder(2);


// function makeAdder(ammount) {
//     return (function (num) {
//         return (num + ammount);
//     });
// }


// console.log(addTwo(10));



let add2 = (number) => sumNumbers(10, number);
let sumNumbers = (num, number) => num + number;


console.log(add2(2));