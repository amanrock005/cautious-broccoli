pairsum(arr) {
        // code here
        let l = 0;
        let r = arr.length-1;
        let sum = 0;
        while(l<r) {
            if(arr[l]+arr[r] > sum) {
                sum = arr[l] + arr[r];
            }
            if(arr[l]<arr[r]) {
                l++;
            }
            else {
                r--;
            }
        }
        return sum;
    }

Input: arr[] = [12, 34, 10, 6, 40]
Output: 74
Explanation: Sum of 34 and 40 is the largest, i.e, 34 + 40 = 74.
