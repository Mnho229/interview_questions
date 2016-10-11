//without extreme cases / early stop
function frequent(num_array) {

    if (num_array.size === 0) {
    return null;
  }

    var placeholder = {};
  var curr_domi;
  var curr_domi_counter = 0;
  
  for (var i = 0; i < num_array.length ; i++) {
        
        var temp_value = num_array[i].toString();
    
    if (placeholder[temp_value] === undefined ) {
        placeholder[temp_value] = 1;
    }
    else {
        placeholder[temp_value]++;
    }
    
    //test for dominance
    if (curr_domi_counter < placeholder[temp_value]) {
        curr_domi = temp_value;
      curr_domi_counter = placeholder[temp_value];
    }
  }
    
    return curr_domi;
}