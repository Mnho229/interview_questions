//Function to check if one array is a rotation of another
//without checking for extreme cases
function checkRotate(num_array1, num_array2) {
    
  //check for same size
    if (num_array1.length !== num_array2.length) {
    return false;
  }
  
  var first_sum = 0, second_sum = 0;
  
  //Change sums if number in second array is encountered already in first array
  var marked_num = num_array1[0];
  var marked_flag = false;
  
  for (var i = 0; i < num_array1.length; i++)
  {
    //if the pivot point of rotation is found
    if (marked_num === num_array2[i])
    {
        marked_flag = true;
    }
    
    if (marked_flag == false)
    {
        first_sum += num_array1[i] - num_array2[i];
    }
    else {
        second_sum += num_array1[i] - num_array2[i];
    }
     console.log(first_sum, second_sum, marked_flag);
  }
  
  console.log(first_sum, second_sum);
  
  // If both sums = 0, one of the arrays is indeed a rotated version of the other
  var total_sum = first_sum + second_sum;
  
  if (total_sum === 0)
  {
    return true;
  }
  else 
  {
      return false;
  }
}