/*
 Displays all numbers from 1-100 (inclusive) in the console log with three case exceptions:
	1: Divisible by 3, replaced by 'Fizz'
	2: Divisible by 5, replaced by 'Buzz'
	3: Divisible by 3 and 5, replaced by 'FizzBuzz'
*/

for (num=1; num <= 100; num++) {		//Loop starts at 1, added by 1, until equal to 100
  if (num % 3 === 0 && num % 5 === 0) {		//FizzBuzz printed if num divisible by 3 and 5
    console.log('FizzBuzz');
  }
  else if (num % 3 === 0) {			//Fizz if num divisible by 3
    console.log('Fizz');
  }
  else if (num % 5 === 0) {			//Buzz if num divisible by 5
    console.log('Buzz');
  }
  else {
    console.log(num);				//Otherwise, the number is just displayed
  };
};
