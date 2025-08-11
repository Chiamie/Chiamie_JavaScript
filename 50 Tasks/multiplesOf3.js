function multiples(startNumber, endNumber){
	while(startNumber <= endNumber){
		if (startNumber % 3 == 0){
			return startNumber;
			startNumber += 3;
			
		}		
	}
}

console.log(multiples(3, 15));