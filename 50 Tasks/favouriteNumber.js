const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
const favouriteNumber = 7;
let askUser = readline.question.bind(readline);
askUser("I have a number, guess what the number is? ", guessed => {
	if(guessed == favouriteNumber)
		console.log("That's my favourite number!");
	else 
		console.log("Nice try, guess again!");
readline.close();

});




