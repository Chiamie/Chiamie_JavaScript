const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
let passed = 0;
let wrong = 0;
let question1 = `
	What is the capital of France?
	a. Paris
	b. London
	c. Berlin
	d. Rome
	`;
console.log(question1);
let askUser = readline.question.bind(readline);
askUser("Enter the correct option: ", userInput => {
	if (userInput.lower == 'a'){
		console.log("correct");
		passed++;
	} else {
		console.log("wrong");
		wrong++;
	}


let question2 = `
	What is the output of photosynthesis?
	a. sugar and carbondioxide
	b. carbondioxide and oxygen
	c. oxygen and sugar
	d. respiration and chlorophyll
	`;
console.log(question2);
askUser("Enter the correct option: ", userInput => {
	if (userInput.lower  == 'b'){
		console.log("correct");
		passed++;
	} else {
		console.log("wrong");
		wrong++;
	}
	console.log(`You passed ${passed} questions and got ${wrong} questions wrong.`);
	readline.close();
});

});




