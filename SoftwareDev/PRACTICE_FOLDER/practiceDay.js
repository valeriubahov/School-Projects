const rls = require("readline-sync");
let runAgain;
do {
    const select = parseInt(rls.question("What exercise do you want to run? "));
    switch (select) {
        ///////////////////////////////////////////////////////////////////////////////
        case 1:
            //Exercise 1
            const userName = rls.question("Please insert your name: ");
            console.log('', '');
            if (userName === "Valeriu") {
                console.log("Hi " + userName);
            }
            else {
                console.log("Who are you?");
            }
            break;
        ///////////////////////////////////////////////////////////////////////////////
        case 2:
            //Exercise 2
            const userAge = parseInt(rls.question("How old are you? "));

            switch (true) {
                case (userAge >= 0 && userAge <= 3):
                    console.log("You are a cute baby");
                    break;
                case (userAge >= 4 && userAge <= 12):
                    console.log("You are a little kid");
                    break;
                case (userAge >= 13 && userAge <= 19):
                    console.log("You are a teenager");
                    break;
                case (userAge >= 20 && userAge <= 35):
                    console.log("You are adult");
                    break;
                case (userAge >= 36 && userAge <= 50):
                    console.log("You are becoming old");
                    break;
                case (userAge >= 51 && userAge <= 65):
                    console.log("You are a middle age person");
                    break;
                case (userAge >= 65):
                    console.log("Retirement time! UHUUU!");
                    break;
            }
            break;
        ///////////////////////////////////////////////////////////////////////////////
        case 3:
            //Exercise 3:
            const NUM_JARS = 3;
            const NUM_BEANS = 20;

            for (let i = 1; i <= NUM_JARS; i++) {
                console.log("Jar", i);
                for (let j = 1; j <= NUM_BEANS; j++) {
                    console.log("\tBean", j);
                }
            }
            break;
        ///////////////////////////////////////////////////////////////////////////////
        case 4:
            // Exercise 4:
            //INPUT data
            const firstNum = parseInt(rls.question("Insert the first number: "));
            const secondNum = parseInt(rls.question("Insert the second number: "));
            const thirdNum = parseInt(rls.question("Insert the third number: "));

            //EMPTY ROW
            console.log('', '');

            //Check numbers
            if (firstNum >= secondNum && firstNum >= thirdNum) {
                console.log("The first number is the largest!");
            }
            else if (secondNum >= firstNum && secondNum >= thirdNum) {
                console.log("The second number is the largest!");
            }
            else if (thirdNum >= firstNum && thirdNum >= secondNum) {
                console.log("The third number is the largest!");
            }
            break;

        //SWAPPING NUMBERS
        case 5:
            let a = 5;
            let b = 7;

            a = a + b;
            b = a - b;
            a = a - b;

            console.log(a, b);
    }
    console.log('', '');

    //RUN ANOTHER PROGRAM
    runAgain = rls.question("Press 1 to run another program or press 0 to exit: ");
}
while (runAgain == 1);