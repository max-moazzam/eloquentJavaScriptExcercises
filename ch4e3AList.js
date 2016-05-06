//A List
//This problem has four parts.
//1: Create a function that takes in an array parameter and returns a list where value is a number in the array and rest is the rest of the array
//2: Create a function that takes in a list object and returns an array of numbers
//3: Create a helper function that prepends a value onto the list
//4: Create a helper function that returns the nth value of the list

//arrayToList takes in an array parameter and returns a list structured so that value is a single value in the array, and rest is the rest of the list
//If there is no more further list, the rest property is set to null
//For instances arrayToList([1,2,3]) would create a list {value: 1, rest: {value:2, rest: {value:3, rest: null}}}
var arrayToList = function(array) {
//Sets list to null if there is no further list
	var list = null;
//For loop works backward adding a value property and a rest property which is set to the rest of the list
	for(var i = array.length - 1; i >= 0; i--) {
		list = {
			value: array[i],
			rest: list
		};
	}
return list;
}

//listToArray takes in a list and returns an array of the values
var listToArray = function(list) {
//An empty array is declared
	var array = [];
//For loop starts at the beginning of the list, then keeps going deeper into the list (node=node.rest) until the list is null (node === false)
//Will push each value into the array
	for (var node = list; node; node = node.rest) {
		array.push(node.value);
	}

return array;
}

//prepend takes in a value and a list parameter, and prepends the value onto the list
var prepend = function(value, list) {
	return {value: value, rest: list};
}

//nth takes in a list and n (which equals to how deep into the list to go into) and returns the value at that level of deepness
var nth = function(list, n) {
//If there is no list, undefined is returned
	if (!list) {
		return undefined;
	}
//Base case, if n = 0 the first value is returned
	if (n === 0) {
		return list.value;
	}
//Otherwise, will run the function again on the rest of the list and keep subtracting n until the program is n levels into the list and returns the value
return nth(list.rest, n-1);
}