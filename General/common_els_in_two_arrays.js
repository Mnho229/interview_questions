//Find common elements of two integer arrays.
//no extreme cases
function commonElements(arr1, arr2)
{
    var potential_common = {};
  
  //plug in all elements from array 1 into a simple map
    for (var i = 0; i < arr1.length; i++)
  {
    if ( potential_common[arr1[i]] === undefined )
    {
        potential_common[arr1[i]] = 0;
    }
  }
  
  //if one element is a property in the map, print the common element
  for (var j = 0; j < arr2.length; j++)
  {
    if (potential_common[ arr2[j] ] !== undefined)
    {
        if (potential_common[ arr2[j] ] === 1)
      {
        continue;
      }
    
        potential_common[ arr2[j] ] = 1;
      console.log( "Common element: " + arr2[j] );
    }
  } 
}

//commonElements([1,2,3,4,5,6], [2,2,7,11,4,5,8,10,15,15])