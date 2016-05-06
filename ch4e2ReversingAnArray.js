//Reversing An Array
//reverseArray function reverses an array by creating a new array
//reverseInPlace function reverses an array by modifying the original array

//Takes in array parameter and reverses it by creating a new array via a loop
function reverseArray(array) {

	//Declares reversed variable to be returned
	var reversed = [];

	//Loops through array parameter, unshifting each number to the front of var reversed
	for (i=0; i < array.length; i++) {
		reversed.unshift(array[i]);
	}

	return reversed;
}

//Takes in array parameter and reverses in place by swapping via loop
function reverseInPlace(array) {

	//Middle is found and floored if odd # of elements
	var middle = Math.floor((array.length / 2));

	//Loops from beginning of array to middle
	//Stores # of index i in var temp
	//Swaps beginning # with corresponding # at end (array[array.length-1-i])
	for (i=0; i < middle; i++) {
		var temp = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = temp;
	}

	return array;
}