/*
Program that creates a chess board in the console log using '#' as black and a space as white.
A prompt will ask you for a size (i.e. enter 8 will create a 8x8 board).
Program is made without utilizing arrays.
*/

//Prompts for a board size and stores it in variable size
var size = Number(prompt('What size board do you want?', '(i.e. Enter 8 if you would like a 8x8 board)'));
var string = '';		//Declares variable to store string which will be the chess board
j=0;				//Declares variable for while loop

while (j < size) {		//While loop which will determine the number of rows
  for (i=0; i <= size; i++) {	//For loop which will determine the number of columns
    
    if (i === size) {		//Once the last column is reached a space is made to make a new line
      string = string + '\n';
      j++;			//And 1 is added to j to indicate the next row is reached
    }
    
    else if (j % 2 === 0) {	//If the row number is even...
      if (i % 2 === 0) {	//Every even column will have a space
        string = string + ' ';
      }
      else {
        string = string + '#';	//And every odd column a #
      }
    }
    
    else {			//If the row number is odd
      if (i % 2 === 0) {	//Every even column will have a #
        string = string + '#';
    }
      else {			//And every odd column a space
        string = string + ' ';
      }
    }
  }
}

console.log(string);		//Calls the chessboard in the console log
