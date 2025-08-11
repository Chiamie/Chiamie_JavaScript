function printYourName(){
	const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
	});

	let askUser = readline.question.bind(readline);
	askUser("Type your name: ", name => {

	for(let times = 1; times <= 3; times++){
		console.log(name);
	}
	readline.close();

});

} 

function printYourName1(size){
	for(let times = 1; times <= size; times++){
		printYourName();
	}
} 



	
	
console.log(printYourName1(3));



