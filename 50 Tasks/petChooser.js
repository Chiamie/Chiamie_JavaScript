const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

let askUser = readline.question.bind(readline);
askUser("Select 'dog' or 'cat': ", pet => {
	if(pet == "dog")
		console.log("Woof! Dogs are awesome!");
	else 
		console.log("Cool choice, but I love dogs!");
readline.close();

});



