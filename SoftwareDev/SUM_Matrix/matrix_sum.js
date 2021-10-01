
let a = [[1, 2], [4, 5]];
let b = [[2, 3], [6, 7]];
let c = [[0, 0], [0, 0]];

// for (let i = 0; i < a.length; i++) {
//     for (let k = 0; k < a[0].length; k++) {
//         c[i][k] = a[i][k] + b[i][k];
//     }
// }

// console.log("SUM:");
// console.log(c);



//Repeat for the length of a
for (let i = 0; i < a.length; i++) {
    //Repeat for the length of items in position 0 of B -> B needs always to have almost 1 position, an all positions are the same type
    for (let j = 0; j < b[0].length; j++) {
        let sumMultiplication = 0;
        //For each element in a moltiply b and add to sum
        for (let k = 0; k < a[0].length; k++) {
            sumMultiplication += a[i][k] * b[k][j];
        }
        c[i][j] = sumMultiplication;
    }
}

console.log("Multiplication: ");
console.log(c);





// a = [a, b], [c, d]
// b = [e, f], [g, h]


// a = [[a * e + b * g],[a * f + b * h]]
// b = [[c * e + d * g],[c * f + d * h]]





//write a for loop that output all of the odd integers less than 100

// for (let h = 1; h < 100; h = h + 2) {
//     console.log(h);
// }