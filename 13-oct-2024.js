class Solution {
    deleteAlt(head) {
        // Code here
        if(!head) {
            return;
        }
        while(head != null && head.next != null) {
            head.next = head.next.next;
            head = head.next;
        }
        
    }
}
