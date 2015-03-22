/*
  Two Functions:

  1: First function takes in a string parameter and returns the number of capital B's there are in the string
  2: The second function operates similarly, however, it allows you to choose the character to count
*/

var countBs = function(string) {
  var total = 0;				//Starts total count at 0
  for (i=0; i < string.length; i++) {		//For loop goes through each character of a string
    if (string.charAt(i) === 'B') {		//If a match is made, then one is added to the total
      total = total + 1;
    }
  }
  return total
}

var countChar = function(string, char) {	//Similar as above, but extra parameter added, char, that let's you choose a character to match
  var total = 0;
  for (i=0; i < string.length; i++) {
    if (string.charAt(i) === char) {
      total = total + 1;
    }
  }
  return total
}
