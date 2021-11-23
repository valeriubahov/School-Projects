
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
        // - SOLUTION 1
        //1 - Filter the Language
        //2 - Filter the borders
        //3 - Sum all the population and return the data
        return data.filter(x => x.languages.map(x => x.name).includes('English')).filter(x => x.borders).filter(x => x.borders.includes('CHN')).reduce((total, x) => total + x.population, 0);

        // - SOLUTION 2
        // return data.filter(x => x.region === 'Asia').filter(x => x.languages.map(x => x.name).includes('English')).filter(x => x.borders).filter(x => x.borders.includes('CHN')).map(x => x.population).reduce((total, x) => total + x, 0);


    }
})();
