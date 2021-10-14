
const rls = require("readline-sync");

const userArray = requestInputArr();
sortArrayCrescent(userArray);

console.log(userArray);

//Request the user to input 5 numbers in to an array
function requestInputArr() {
    const myArr = [];
    for (let i = 0; i < 5; i++) {
        let numInput = parseInt(rls.question("Insert your number: "));
        myArr.push(numInput);
    }
    return myArr;
}


//Sorting Cresc.
function sortArrayCrescent(A) {
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (A[j] > A[i]) {
                let tmp = A[i];
                A[i] = A[j];
                A[j] = tmp;
            }
        }
    }
    return A;
}


//Sorting Desc
function sortArrayDesc(A, i, j) {
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (A[j] < A[i]) {
                let tmp = A[i];
                A[i] = A[j];
                A[j] = tmp;
            }
        }
    }
    return A;
}