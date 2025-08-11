function magicNumber(userInput){
	const magicNumber = 42;
	if(userInput == magicNumber)
		console.log("You found the magic number!");
	else
		console.log("Keep looking!");

}



const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

let askUser = readline.question.bind(readline);
askUser("I have a number, guess what it is? ", userGuess => {


magicNumber(userGuess);
readline.close();

});




