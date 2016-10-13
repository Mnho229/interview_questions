//Find the only element in an array that only occurs once.
//Assumed to be integers only
function snowflake(arr) {
    var mapObj = {};
  var saved = null;
  
  for (var i = 0; i < arr.length; i++)
  {
    var temp = arr[i].toString();
    if ( mapObj[temp] === undefined)
    {
        mapObj[temp] = 1;
    }
    else
    {
        mapObj[temp]++;
    }
  }
  for (var j in mapObj)
  {
    if ( mapObj[j] == 1 )
    {
        if (saved === null)
      {
        saved = j;
      }
      else
      {
        return "More than one unique number was detected.";
      }
    }
  }
  
  return saved;
  
}

//console.log( snowflake([ 3, 3, 4, 4, 5, 6 ]) );