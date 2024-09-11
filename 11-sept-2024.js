class Solution {
    
    containsNine(num) {
        while(num>0) {
            if(num%10===9) {
                return true;
            }
            num = Math.floor(num/10)
        }
        return false;
    }
    
    findNth(n) {
        let count = 0;
        let currentNum = 0;
        
        while(count < n) {
            currentNum++;
            if(!this.containsNine(currentNum)) {
                count++;
            }
        }
        return currentNum;
    }
    
    
}
