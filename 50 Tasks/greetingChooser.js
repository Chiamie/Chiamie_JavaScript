const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

let askUser = readline.question.bind(readline);
askUser("Type your name: ", name => {
	if(name.toLowerCase() === 'alex')
		console.log("Hello, friend!");
	else 
		console.log("Hello, stranger!");
readline.close();

});


