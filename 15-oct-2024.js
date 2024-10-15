class Solution {
    // Function to count the number of subarrays which adds to the given sum.
    subArraySum(arr, tar) {
        // code here
        let count = 0;
        let prefixSum = 0;
        let prefixMap = {0:1};
        
        for(let i=0; i<arr.length; i++) {
            prefixSum += arr[i];
            
            if(prefixMap[prefixSum - tar]) {
                count += prefixMap[prefixSum -tar];
            }
            
            if(prefixMap[prefixSum]) {
                prefixMap[prefixSum]++;
            } else {
                prefixMap[prefixSum] = 1;
            }
        }
        
        return count;
    }
    
}
