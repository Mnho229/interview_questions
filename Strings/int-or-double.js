//function that determines if a string is an integer or a double
//Note: All numbers in Javascript are 64-bit floats, so a more 'naive' method will be used to account for this.
//When using Number Constructor or parseInt/Float, the decimal gets truncated away if there's only zeros after the decimal point like "10.0"
//Some edge cases not covered.  May need to come back to this
function intOrDouble(word) {

    var num = Number(word);
  
  if (isNaN(num))
  {
    return word + " is neither an integer or a double";
  }

    if (Math.floor(num) !== num)
  {
    return "Double!";
  }
  else 
  {
    return "Integer!";
  }
}

//console.log( intOrDouble("50") );