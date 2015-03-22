//Function, utilizing recursion, that takes in a number parameter and returns true if the numer is even, and false if it is odd

var isEven = function(num) {		//Function takes in a number as a parameter
  if (num === 0) {			//If the number is zero, then it is even (true)
    return true;
  }
  else if (num === 1) {			//If the number is one, then it is odd (false)
    return false;
  }
  else if (num > 0) {			//If the number is positive, and not zero or 1, then it will be continuously reduced by 2 until 1 or 0 is reached
    return isEven(num - 2);
  }
  else if (num < 0) {			//If the number is negative, and not zero or 1, then it will be continously added by 2 until 1 or 0 is reached
    return isEven(num + 2);
  }
}
