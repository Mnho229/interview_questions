//function that determines if a string is a palindrome
//no extreme cases covered (spaces especially)
function palindromeCheck(word) {

    if (word.length === 1 || word.length === 0)
  {
    return true;
  }

    for (var i = 0; i < word.length ; i++)
  {
    var forward = word.charAt(i);
    var backward = word.charAt(word.length - 1 - i)
    
    console.log(forward, backward);
    
    if (forward !== backward)
    {
        return false;
    }
  }
  
  return true;

}

//console.log( palindromeCheck("a") );