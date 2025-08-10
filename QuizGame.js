let passed = 0;
let wrong = 0;
//let NUMBER_OF_QUESTIONS = 0;
//while (NUMBER_OF_QUESTIONS != 5){
	let question1 = `
		What is the capital of France?
		a. Paris
		b. London
		c. Berlin
		d. Rome
	`;
	console.log(question1);
	//NUMBER_OF_QUESTIONS++;
	let userInput = 'a';
	if (userInput == 'a'){
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
	//NUMBER_OF_QUESTIONS++;
	userInput = 'b';
	if (userInput == 'b'){
		console.log("correct");
		passed++;
	} else {
		console.log("wrong");
		wrong++;
	}


