const getPassword = function() {
	let password = "54AytR";
	return password;
};

const checkComplexity1 = function(password) {
	let letterCount = 0; 
	for(let character = 0; character < password.length; character = character + 1) {
		if(password.charAt(character).match(/[a - z]/i)) {
			letterCount += 1;
		}
	}
	return letterCount;
}; 
const checkComplexity2= function(password) {
	let digitCount = 0;
	for(let character = 0; character < password.length; character = character + 1) {
		if(password.match(/\d/.test(password.charAt(character)))) {
			digitCount += 1;
		}
	}
	return digitCount;
};

const evaluateStrength = function(letterCount, digitCount) {
	if((letterCount < 6) || (digitCount == 0)) {
		console.log("Weak: fewer than 6 letters with no digits.");
	} else if((letterCount >= 5 && letterCount <= 8) && (digitCount >= 1)) {
		console.log("Moderate: Password has 5 to 8 letters with at least 1 digit.");
	} else if((letterCount > 8) && (digitCount >= 2)) {
		console.log("Strong: Password has more than 8 letters and at least 2 digits.");
	}
};

const main = function() {
	while (true) {
		let password = getPassword();
		let letterCount = checkComplexity1(password);
		let digitCount = checkComplexity2(password);
		console.log("Numeric characters: " + letterCount);
		console.log("Alphabetic characters: " + digitCount);
		evaluateStrength(letterCount, digitCount);
		console.log("Try another score?(Yes/No");
		let response = "no";
		if(response.equals("no")) {
			break;
		}
	}
};	



main();






