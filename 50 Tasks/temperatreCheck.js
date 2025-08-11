function temperatureCheck(userInput){
	if(userInput >= 15 || userInput == 30)
		return "Hot!";
	else if(userInput < 15)
		return "Cold!";

}

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

let askUser = readline.question.bind(readline);
askUser("What is the temperature: ", userInputTemp => {
			
console.log(temperatureCheck(userInputTemp));
readline.close();

});


