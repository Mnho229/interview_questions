//Function that determines if two strings are anagrams
//some extreme cases not covered
function anagramChecker(str1, str2)
{
    if (str1.length !== str2.length)
  {
    return false;
  }

    var str_1 = str1.toLowerCase().split("").sort().join('');
    var str_2 = str2.toLowerCase().split("").sort().join('');
  
  if (str_1 === str_2)
  {
    return true;
  }
  else
  {
    return false;
  }
}

//console.log( anagramChecker("cinema", "macine") );