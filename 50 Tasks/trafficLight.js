const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

let askUser = readline.question.bind(readline);
askUser("Input a colour(red, yellow or green): ", trafficColour => {
	if(trafficColour == 'green')
		console.log("Go!");
	else if(trafficColour == 'red')
		console.log("Stop!");
	else if(trafficColour == 'yellow')
		console.log("Wait!");

readline.close();

});



