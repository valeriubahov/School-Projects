//ICA - Array Functions - Full Stack Front End Programming 

// Using the data retrieved from the API Endpoint, 
// write a function called 'getPopulation' that returns the total population
// for all countries that BOTH border China
// and list English as one of their official languages

//NOTE: You are NOT permitted to use FOR, FOREACH, or WHILE loops of any kind.
//      You must leverage the available JavaScript Array Iteration Functions to accomplish your goal.
//      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods


(function () {


    fetch(`https://restcountries.com/v2/all`)
        .then(response => response.json())
        .then(json => {
            pop = json;

            console.dir(getPopulation(json));

            // //DO NOT MODIFY THIS CODE
            console.dir(`TOTAL POPULATION: ${getPopulation(json)}`);
            console.assert(getPopulation(json) === 1608378516, "Incorrect population total returned by getPopulation function");

        })

    //WRITE YOUR FUNCTION BELOW THIS LINE
    function getPopulation(data) {

        // let myResult = nums.filter(x => x >= 0).map(y => y ** 3);

        const borders = data.map(x => x.borders).filter(x=>x==='CHN');

        return data.filter(x => x.region === 'Asia').filter(x => x.languages.map(x => x.name).includes('English')).filter(x => x.borders).map(x => x.population).reduce(reducer);

    }

    const reducer = (previousValue, currentValue) => previousValue + currentValue;



})();