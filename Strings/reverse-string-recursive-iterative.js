//reverse string iteratively
//Extreme cases not covered
function reverseIterate(word) {
    
  var reconstruction = "";
  
    for (var i = word.length - 1; i >= 0; i--)
  {
    reconstruction += word.charAt(i);
  }
  
  return reconstruction;

}

//console.log( reverseIterate("Hello World") );

//Recursive version of reversing a string
function reverseRecursive(word) {

    if (word.length === 1)
  {
    return word;
  }
    
  return reverseRecursive( word.substring(1) ) + word.charAt(0);
  
}

//console.log( reverseRecursive("Hello World") );


