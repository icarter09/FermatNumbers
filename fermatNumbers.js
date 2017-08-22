(function() {
	var limit = 0;	

	while ( limit < 10) {
		var firstPower = Math.pow(2, limit);
		var secondPower = Math.pow(2, firstPower);
		var fermatNumber = secondPower + 1;

		console.log("Fermat number for F(" + limit + ") is " + fermatNumber);

		limit++; 
	}
})();
