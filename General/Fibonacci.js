//Fibonacci Iterative version
function FiboIterate(limit) {

    var fib_array = [0,1];
  var fib_sum = 0;
    
  for (var i = 2; i <= limit; i++)
  {
    fib_sum = fib_array[i-1] + fib_array[i-2];
    console.log(fib_sum);
    fib_array.push(fib_sum);
  }
  
}

//FiboIterate(7);

//Fibonacci Recursive version
function FiboRec(limit) {
    if (limit === 0)
  {
    return 0;
  }
  if (limit === 1) 
  {
    return 1;
  }
  return FiboRec(limit - 2) + FiboRec(limit - 1);
}

//console.log(FiboRec(7));
