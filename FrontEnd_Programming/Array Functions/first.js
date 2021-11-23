let nums = [1, 2, 6, 18, -2, 3, 0, -22];


// INCLUDES -  return true or false if the value is in the array
console.log(nums.includes(3));

// MAP - let you do a function for each element, it does not touch the original array
let result = nums.map(x => x ** 2);
console.log(result);
console.log(nums);

// FILTER - like the where in SQL - return a new array of the find values - DOESN'T touch the original array
let arrResult = nums.filter(x => x > 5);
console.log(arrResult);
console.log(nums);




// return an array that includes the cubes of all numbers in the original array that are non-negative
// TLDR - cubes of non-negative numbers

let myResult = nums.filter(x => x >= 0).map(y => y ** 3);
console.log(myResult);



// SORT - sorts alphabetically by default, not numerically - IT CHANGES THE ORIGINAL ARRAY
let words = ["zeta", "delta", "alpha", "beta", "gamma"];
let sortArray = nums.sort((a, b) => a - b);

// sorting function
// sort (a,b) => a -b 
// if a == b return 0
// if a > b return positive
// if a <b retun negative

console.log(sortArray);


// REVERSE - reverse the array the last becomes first, and the first becomes last - this modifies the original array
console.log(nums.reverse());