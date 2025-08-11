const readline = require(`readline`).createInterface({
	input: process.stdin,
	output: process.stdout
});
	
let askUser = readline.question.bind(readline);
askUser("Enter a number: ", userInput  => {
	if(userInput % 2 == 0)
		console.log("Even!");
	else 
		console.log("Odd!");
readline.close();

});



