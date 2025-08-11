function guessTheAnimal(userGuess){
	const myAnimal = "dog";
	if (myAnimal === userGuess)
		return "Correct! It's a dog!";
	else
		return "Nope, it's a dog!";
}

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

let askUser = readline.question.bind(readline);
askUser("I have an animal name, guess what it is? ", userGuess => {


console.log(guessTheAnimal(userGuess));
readline.close();

});






