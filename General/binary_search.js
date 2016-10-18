//Binary Search of a sorted array
//Does not support duplicates or rotated Arrays
function binarySearch(arr, key) {
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
    
    if (arr[mid] < key)
    {
        left = mid + 1;
    }
    else
    {
        right = mid - 1;
    }
  }

    return -1;
}