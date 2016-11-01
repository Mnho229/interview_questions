//Multiplies two integers together
function intMultiplier(num1, num2) {
    
  var sum = 0;
  
    for (var i = 0; i < Math.abs(num2); i++)
  {
    sum += Math.abs(num1);
  }
  
  if (num1 < 0 && num2 > 0 || num1 > 0 && num2 < 0) {return -sum;}
  
  return sum;
}

//console.log( intMultiplier(-15, -3) );