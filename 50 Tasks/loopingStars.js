function makeAtowerOfStars(){
	let count = 0;
	while(count < 5){
		console.log("*");
		count++;
	}
}



function makeAtowerOfStars1(size){
	for(let times = 0; times < size; times++){
		makeAtowerOfStars();
	}
}

makeAtowerOfStars1(5);

