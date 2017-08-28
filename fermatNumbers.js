(function() {
	var limit = 0;	

	while ( limit < 10) {
		let firstPower = Math.pow(2, limit);
		let secondPower = Math.pow(2, firstPower);
		let fermatNumber = secondPower + 1;

		console.log("Fermat number for F(" + limit + ") is " + fermatNumber);

		limit++; 
	}
})();
