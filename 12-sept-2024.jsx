class Solution {
    /* Should return data of middle node. If linked list is empty, then  -1*/
    getMiddle(node) {
        // your code here
        if(node === null) {
            return -1;
        }
        
        let slow = node;
        let fast = node;
        
        while(fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.data;
    }
}


class Solution
{
    //Function to find the smallest positive number missing from the array.
    missingNumber(arr, n)
    {
        //your code here
          // Step 1: Rearrange elements to their correct positions
        for (let i = 0; i < n; i++) {
            // Swap elements until arr[i] is in its correct position or out of range
            while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
                let temp = arr[arr[i] - 1];
                arr[arr[i] - 1] = arr[i];
                arr[i] = temp;
            }
        }

        // Step 2: Check the first position where the index does not match the value
        for (let i = 0; i < n; i++) {
            if (arr[i] !== i + 1) {
                return i + 1;
            }
        }

        // Step 3: If all numbers from 1 to n are present, return n + 1
        return n + 1;
    }
        
    
}
