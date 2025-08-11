const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

let askUser = readline.question.bind(readline);
askUser("Type a number: ", number => {
	if(number > 0)
		console.log("Positive!");
	else if (number <= 0)
		console.log("Negative or zero!");
readline.close();

});



 