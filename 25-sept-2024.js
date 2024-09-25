isPalindrome(head) {
        // your code here
        if(!head || !head.next) return true;
        
        let slow = head;
        let fast = head;
        
        while(fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        let prev = null;
        while(slow !== null) {
            let nextNode = slow.next;
            slow.next = prev;
            prev = slow;
            slow = nextNode;
        }
        
        let left = head;
        let right = prev;
        while(right !== null) {
            if(left.data !== right.data) {
                return false;
            }
            left = left.next;
            right = right.next;
        }
        return true;
    }
