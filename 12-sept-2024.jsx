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
