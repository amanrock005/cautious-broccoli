class Solution {
    // Function to reverse a circular linked list
    reverse(head) {
        // code here
        if(!head || !head.next || head.next === head) {
            return head;
        }
        
        let prev = null;
        let current = head;
        let nextNode = null;
        let tail = head;
        
        do{
            nextNode = current.next;
            current.next = prev;
            prev= current;
            current = nextNode;
        } while(current !== head);
        
        head.next = prev;
        head = prev;
        
        return head;
    }

    // Function to delete a node from the circular linked list
    deleteNode(head, key) {
        // code here
        if(!head) {
            return null;
        }
        
        let current = head;
        let prev = null;
        
        if(head.data === key) {
            let last = head;
            while(last.next !== head) {
                last = last.next;
            }
            
            if(head.next === head) {
                return null;
            }
            
            head = head.next;
            last.next = head;
            
            return head;
        }
        
        while(current.next !== head && current.data !== key) {
            prev = current;
            current = current.next;
        }
        
        if(current.data === key) {
            prev.next = current.next;
        }
        
        return head;
    }
}
