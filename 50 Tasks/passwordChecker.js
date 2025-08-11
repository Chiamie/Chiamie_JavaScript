function checkThis(userPassword){
	const password = "secret123."
	if (password === userPassword)
		return "Access granted! Welcome!";
	else
		return "Access denied!"
		
				
				
	
}

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

let askUser = readline.question.bind(readline);
askUser("Enter your password: ", userInput => {

console.log(checkThis(userInput));
readline.close();

});

	
