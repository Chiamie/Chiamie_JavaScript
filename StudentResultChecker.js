const get_score = function() {
	while (true) {
		let score = 54;
		if (score < 0 || score > 100){
			console.log("Invalid score. Please enter a score between 0 and 100.");
		} else {
			return score;
		}
	}
};

const calculate_grade = function(score) {
	if (score >= 80) {
		return "A";
	} else if (score >= 70) {
		return "B"	;
	} else if (score >= 50) {
		return "C";
	} else if (score >= 40) {
		return "D";
	} else {
		return "E";
	}
};

const get_feedback = function(grade) {
	if (grade == "A") {
		return "An Excellent performance.";
	} else if (grade == "B") {
		return "Good job, keep improving.";
	} else if (grade == "C") {
		return "Fair effort, keep working on it.";
	} else if (grade == "D") {
		return "You can do better, don't give up.";
	} else {
		return "Needs Improvement, Ask for help.";
	}
};

let main = function() {
	while (true) {
		let score = get_score();
		let grade = calculate_grade(score);
		console.log("Grade:" + grade);
		console.log("Feedback:" + get_feedback(grade));
		let user_response = "no";
		if (user_response == "no") {
		
			break;
		}
	}
};

main();
