lps(str) {
        // code here
        const n = str.length;
        if(n === 0) return 0;
        
        let lpsArray = new Array(n).fill(0);
        
        let length = 0;
        
        let i = 1;
        
        while(i < n) {
            if(str[i] === str[length]) {
                length++;
                lpsArray[i] = length;
                i++;
            } else {
                if(length !== 0) {
                    length = lpsArray[length-1];
                } else {
                    lpsArray[i] = 0;
                    i++;
                }
            }
        }
        
        return lpsArray[n-1];
    }


Input: str = "abab"
Output: 2
Explanation: "ab" is the longest proper prefix and suffix. 
Input: str = "aaaa"
Output: 3
Explanation: "aaa" is the longest proper prefix and suffix
