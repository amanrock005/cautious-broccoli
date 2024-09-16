class Solution {
    maxLength(str) {
        // code here
        let maxLen = 0;
        let stack = [-1];
        
        for(let i=0; i<str.length; i++) {
            if(str[i] === '(') {
                stack.push(i);
            } else {
                stack.pop();
                if(stack.length > 0) {
                    let currentValidLen = i - stack[stack.length - 1];
                    maxLen = Math.max(maxLen, currentValidLen);
                } else {
                    stack.push(i);
                }
            }
        }
        return maxLen;
    }
}
