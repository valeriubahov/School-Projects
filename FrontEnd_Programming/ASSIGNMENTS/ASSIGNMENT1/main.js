(function () {

	//Choose an array method to implement for each of the incomplete functions.
	//You MUST only use a combination of MAP, FILTER, and REDUCE array functions in order to accomplish your goal.
	//No use of for loops of any kind or the forEach function is permitted.

	//Remember, you can if you wish chain together array function calls to attain your goals.
	// Ex: array.filter().map()

	//Get data for the TV Show "Friends"
	fetch('http://api.tvmaze.com/shows/431?embed[]=episodes&embed[]=cast')
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			pop = json;
			//DO NOT MODIFY THE CODE IN HERE...check the console for your functions' output

			//1 - Implement the function called getGuntherCount which returns the total number of episodes 
			// where the character Gunther is mentioned in the episode summary.
			console.log('--------------------------------');
			console.log(`Gunther Count: ${getGuntherCount(json)}`);

			//2 - Implement the function called getTotalRuntimeMinutes() that totals all runtime minutes for all episodes
			console.log('--------------------------------');
			console.log(`Total Runtime Minutes: ${getTotalRuntimeMinutes(json)}`);

			//3 - Implement the function called getTotalEpisodesInYear() that returns the number of episodes that aired in the year 2000
			console.log('--------------------------------');
			console.log(`Total episodes airing in year 2000: ${getTotalEpisodesInYear(json, '2000')}`);

			//4 - Implement the function called getFemaleCastMembers() that returns an array of the names of the female cast members.
			console.log('--------------------------------');
			console.log(`Female Cast Members:`);
			console.log(getFemaleCastMembers(json));

			//5 - Implement the function called getEpisodeTitles() which returns a list of episode
			//    where the argument string is found in the episode summary.
			console.log('--------------------------------');
			console.log(`Episodes that mention Ursula:`);
			console.log(getEpisodeTitles(json, 'Ursula'));

			//6 - Implement the function called getCastMembersOver55() which returns a list of cast members
			//    who are currently 55 years of age or older.
			console.log('--------------------------------');
			console.log(`Cast Members who are currently 55 or older:`);
			console.log(getCastMembers55OrOlder(json));

			//7 - Implement the function called getTotalRuntimeMinutesExcludingSeasonSix that gets the total 
			//    runtime minutes for all episodes excluding episodes in season 6
			console.log('--------------------------------');
			console.log(`Total runtime in minutes excluding Season 6: ${getTotalRuntimeMinutesExcludingSeasonSix(json)}`);

			//8 - Implement the function called getFirstFourSeasons that gets the episodes for the first four seasons 
			//    but only return an array of JSON objects containing the season number and episode name
			console.log('--------------------------------');
			console.log(`Episode JSON for first four seasons:`)
			console.log(getFirstFourSeasons(json));

			//9 - Implement the function called getEpisodeTallyBySeason that returns an object containing the season name and the total episodes as key:value pairs for each season
			console.log('--------------------------------');
			console.log(`Tally of episodes by season:`);
			console.log(getEpisodeTallyBySeason(json));

			//10 - Implement the function called capitalizeTheFriends that transforms the episode JSON data by capitalizing the words Joey, Chandler, Monica, Rachel, Phoebe, and Ross in both 
			//the name and summary of the episodes.
			console.log('--------------------------------');
			console.log(`Capitalized Friends:`);
			console.log(capitalizeTheFriends(json));

		})

	// COMPLETE THE FOLLOWING FUNCTIONS BY IMPLEMENTING MAP, REDUCE, OR FILTER 
	// (or a combination) ON THE PROVIDED JSON DATA

	// Complete the required ten functions below this line...
	function getGuntherCount(data) { // <- you may or may not need to define parameters for your function
		return data._embedded.episodes.filter(x => x.summary).filter(x => x.summary.includes('Gunther')).length;
	}

	function getTotalRuntimeMinutes(data) { // <- you may or may not need to define parameters for your function
		return data._embedded.episodes.filter(x => x.runtime).map(x => x.runtime).reduce((sum, runtime) => sum + runtime, 0);
	}

	function getTotalEpisodesInYear(data, year) { // <- you may or may not need to define parameters for your function
		return data._embedded.episodes.map(x => x.airdate).filter(x => x.includes(year)).length;
	}

	function getFemaleCastMembers(data) { // <- you may or may not need to define parameters for your function
		return data._embedded.cast.filter(x => x.person).map(x => x.person).filter(x => x.gender.includes('Female')).map(x => x.name);
	}

	function getEpisodeTitles(data, name) { // <- you may or may not need to define parameters for your function
		return data._embedded.episodes.filter(x => x.summary).filter(x => x.summary.includes(name)).map(x => x.name);
	}

	function getCastMembers55OrOlder(data) { // <- you may or may not need to define parameters for your function
		return data._embedded.cast.filter(x => x.person).map(x => x.person).filter(x => (2021 - parseInt(x.birthday.substr(0, 4))) >= 55).map(x => x.name);
	}

	function getTotalRuntimeMinutesExcludingSeasonSix(data) { // <- you may or may not need to define parameters for your function
		return data._embedded.episodes.filter(x => x.season !== 6).map(x => x.runtime).reduce((sum, runtime) => sum + runtime, 0);
	}

	function getFirstFourSeasons(data) { // <- you may or may not need to define parameters for your function
		return data._embedded.episodes.filter(x => x.season <= 4).map(x => ({ season: x.season, episodeName: x.name }));
	}

	function getEpisodeTallyBySeason(data) { // <- you may or may not need to define parameters for your function
		return data._embedded.episodes.map(x => ({ season: x.season, episode: x.season })).reduce((x, y) => { (!x[y.episode] ? x[y.episode] = 1 : x[y.episode] = x[y.episode] + 1); return x; }, {});
	}

	function capitalizeTheFriends(data) { // <- you may or may not need to define parameters for your function
		// SOLUTION 1 - FULL JSON 
		return data._embedded.episodes.map(x => x).reduce((x, y) => {
			x[y] = x[y] || [];
			y.summary = y.summary.replace('Monica', 'MONICA').replace('Joey', 'JOEY').replace('Chandler', 'CHANDLER').replace('Rachel', 'RACHEL').replace('Phoebe', 'PHOEBE').replace('Ross', 'ROSS');
			y.name = y.name.replace('Monica', 'MONICA').replace('Joey', 'JOEY').replace('Chandler', 'CHANDLER').replace('Rachel', 'RACHEL').replace('Phoebe', 'PHOEBE').replace('Ross', 'ROSS');
			x[y].push(y);
			return x;
		}, {});

		// SOLUTION 2 - OBJ Containing only SUMMARY and NAME
		// return data._embedded.episodes.map(x => ({summary:x.summary.replace('Monica', 'MONICA').replace('Joey', 'JOEY').replace('Chandler', 'CHANDLER').replace('Rachel', 'RACHEL').replace('Phoebe', 'PHOEBE').replace('Ross', 'ROSS'),name:x.name.replace('Monica', 'MONICA').replace('Joey', 'JOEY').replace('Chandler', 'CHANDLER').replace('Rachel', 'RACHEL').replace('Phoebe', 'PHOEBE').replace('Ross', 'ROSS')}))
	}
})();
