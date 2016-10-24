//Function that computes the square root of a number
//Babylonian method
//Decimal number in while condition represents accuracy level
function squareRoot(num) {
  
  var old_guess = -1, guess = 1;
  
  while(Math.abs(guess - old_guess) > 0.000001)
  {
    old_guess = guess;
    guess = (guess + num/guess) / 2;
  }
  
  return guess;
}

//console.log(squareRoot(5));