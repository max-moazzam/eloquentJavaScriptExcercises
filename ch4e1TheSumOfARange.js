//The Sum of a Range
//Range function and Sum function

//Range will return an array of numbers between a start and end parameter in increments of 1
//An optional parameter, step, is included to change the increments of the range

var range = function(start, end, step) {

	var array = [];

	//If no step parameter is included, default step parameter set to 1
	if (step === undefined) {
		step = 1;
	}

	//Returns error if start > end when step is +, step is 0, or start < end when step is negative
	if ((start > end && step > 0) || (step === 0) || (start <= end && step < 0)) {
		return 'Invalid parameters';
	}

	//Checks to see if range is in ascending order
	//For loop begins at start, continues when less than or equal to end, and increased by step parameter
	//Numbers are pushed into var array
	if (start <= end) {
		for (i=start; i <= end; i=i+step) {
			array.push(i);
		}
	}

	//Checks to see if range is in descending order
	//For loop begins at start, continues when larger than or equal to end, and increased(decreased) by step parameter
	//Numbers are pushed into var array
	if (start > end) {
		for (i=start; i >= end; i=i+step) {
			array.push(i);
		}
	}

	return array;
}

//Sum function takes in an array parameter and returns the sum of all elements in the array using a for loop 

var sum = function(array) {
 	
 	//Var total declared to store the total
 	var total = 0;
 	//For loop goes through each index of array and adds to var total
 	for (i=0; i < array.length; i++) {
 		total = total + array[i];
 	}
 	
 	return total;
}

//Exercise sample to equal 55
console.log(sum(range(1,10)));