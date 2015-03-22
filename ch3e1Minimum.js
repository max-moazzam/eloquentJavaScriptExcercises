//This is a simple function that will take in two numbers, and return the smaller one, or say the numbers are equal

var min = function(num1,num2) {		//Takes in two numbers, num1 and num2
  if (num1 < num2) {			//Checks to see if num1 is less than num2
    return num1;			//If so num1 is returned
  }
  else if (num1 > num2) {		//Checks to see if num1 is greater than num2
    return num2;			//If so num2 is returned
  }
  else if (num1 === num2) {		//If numbers are equal, function returns this statement
    return 'The numbers are equal';
  }
}
