function numberGuessingGame(){
	const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
	});
	
	
	const secret = 8;
	let askUser = readline.question.bind(readline);
	askUser("I have a secret number, what is it?: ", userInput => {	
		
	while (userInput != -1) {
		if (userInput == secret){
			console.log("Correct!")
		}else{
			console.log("Try again!")
			askUser = readline.question.bind(readline);
			askUser("I have a secret number, what is it?: ", userInput => {
		}

	readline.close();

	});

	});

	}



}






