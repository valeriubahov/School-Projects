// use a for loop to draw a row of 25 stars(*)
// 5 rows of 25 starts

let stars;
console.log('', '');
for (let i = 1; i <= 5; i++) {
    stars = "" + i + " - ";
    for (let k = 0; k < 25; k++) {
        stars += "*";
    }
    console.log(stars);
}
console.log('', '');

