//Binary form of positive integers given in an array
function binaryFormInt(num) {
  var i, j = 0;
  var binary_array = [];
  
  while(num>0)
  {
    i = 2 ** j;
    
    
    if (i >= num)
    {
      if (i == num)
      {
        binary_array[j] = 1;
        num = num - i;
      }
      else 
      {
        binary_array[j-1] = 1;
        num = num - (2 ** (j - 1));
        j = 0;
      }
    }
    else
    {
      binary_array[j] = 0;
      j++;
    }
    
  }
  console.log( binary_array.reverse() );
}

//binaryFormInt(3);
