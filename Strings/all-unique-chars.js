//function that determines if all characters in a string are unique
//some extreme cases not covered and is case-sensitive
function allUniqueCheck(word)
{
    var frequency_map = {};
  
  for (var i = 0; i < word.length; i++)
  {
    var temp_char = word.charAt(i);
    
    if (frequency_map[temp_char] === undefined)
    {
        frequency_map[temp_char] = 1;
    }
    else
    {
        return false;
    }
  }
  
  return true;
}

console.log( allUniqueCheck("We artboisw") );