//Binary Search of a sorted array that is rotated
//Does not support duplicate elements
function rotatedBinarySearch(arr, key) {
    var mid;
  var left = 0;
  var right = arr.length - 1;
  
  while (left <= right)
  {
  
    mid = Math.floor(left + (right - left)/2 );
    
    if (arr[mid] == key)
    {
        return arr[mid];
    }
    
    if (arr[left] < arr[mid])
    {
        if (arr[left] <= key && key < arr[mid])
      {
        right = mid - 1;
      }
      else
      {
        left = mid + 1;
      }
    }
    else
    {
        if ( arr[mid] < key && key <= arr[right] )
      {
        left = mid + 1;
      }
      else
      {
        right = mid - 1;
      }
    }
  }

    return -1;
}