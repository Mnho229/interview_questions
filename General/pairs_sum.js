//Find pairs in an integer array whose sum is equal to 10 (bonus: do it in linear time)
//without extreme cases
function checkSum10(num_array) {
    var map_freq = {};
  
  for (var i = 0; i < num_array.length ; i++)
  {
    var operand = num_array[i].toString();
        
    if (map_freq[operand] === undefined ) {
        map_freq[operand] = 1;
    }
    else {
        map_freq[operand]++;
    }
  }
  
  var twice_count = 0;
  
  for (var j = 0; j < num_array.length; j++)
  {
    var second_operand = (10 - num_array[j]).toString();
    
    twice_count+= map_freq[second_operand];
    
    if (10 - num_array[j] === num_array[j]) {
        twice_count--;
    }
  }
  
  return twice_count/2
 
}