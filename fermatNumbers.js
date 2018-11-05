(function() {
	let limit = 0;	 

	while ( limit < 10) {
		let firstPower = Math.pow(2, limit),
		    secondPower = Math.pow(2, firstPower),
		    fermatNumber = secondPower + 1;

		console.log("Fermat number for F(" + limit + ") is " + fermatNumber);
		
		limit++; 
	}
})();
