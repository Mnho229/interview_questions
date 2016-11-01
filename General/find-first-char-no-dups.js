//Finding the first letter with no duplicates (alphabetized)
//No sorting may change result but also may have more O(n) cases
//Only some extreme cases covered
function firstExclusiveLetter(word)
{
    var word_array = word.split("").sort();
  
  if (word_array.length === 1)
  {
    return word_array[0];
  }
  
  var prev = "", curr, saved = "";
  
  for (var i = 0; i < word_array.length ; i++)
  {
    curr = word_array[i];
    
    if (curr === prev)
    {
        saved = "";
      prev = curr;
    }
    else
    {
        if (saved !== curr && saved !== "")
      {
        return saved; 
      }
      
      saved = curr;
      prev = curr;
      
      if (i === word_array.length - 1)
      {
        return saved;
      }
    }
    
  }
  
  return "No exclusive character in this string";
}

//console.log( firstExclusiveLetter("3AaaaB") );