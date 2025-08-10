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
	if (userInput.toLowerCase() == 'a'){
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
	if (userInput.toLowerCase()  == 'c'){
		console.log("correct");
		passed++;
	} else {
		console.log("wrong");
		wrong++;
	}
		
	

let question3 = `
	Photosynthesis and Respiration are opposite of each other?
	a. True
	b. False
	`;
console.log(question3);
askUser("Enter the correct option: ", userInput => {
	if (userInput.toLowerCase()  == 'a'){
		console.log("correct");
		passed++;
	} else {
		console.log("wrong");
		wrong++;
	}
	
	

let question4 = `
	Which of these is the third stage of a water cycle process?
	a. Evaporation
	b. Condensation
	c. Precipitation
	d. Collection
	`;
console.log(question4);
askUser("Enter the correct option: ", userInput => {
	if (userInput.toLowerCase()  == 'c'){
		console.log("correct");
		passed++;
	} else {
		console.log("wrong");
		wrong++;
	}
		
	
let question5 = `
	The bones of the lower arm are?
	a. femur and tibia
	b. femur and humerus
	c. tibia and fibula
	d. ulna and radius
	`;
console.log(question5);
askUser("Enter the correct option: ", userInput => {
	if (userInput.toLowerCase()  == 'd'){
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

});

});

});




