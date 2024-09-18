function sort01(arr) {
 const left = 0;
 const right = arr.elngth-1;
 
 while(left<right) {
  while(arr[left] === 0 && left<right) {
   left++;
  }
  while(arr[right] === 1 && left<right) {
   right++;
  }
  if(left<right) {
   [arr[left],arr[right]]=[arr[right],arr[left]];
   left++;
   right++;
  }
 }
}
