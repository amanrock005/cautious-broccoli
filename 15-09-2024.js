class Solution {
    //Function to convert a binary tree to doubly linked list and return it.
    constructor() {
        this.head = null;
        this.prev = null;
    }
    
    bToDLL(root)
    {
        //your code here
       if(!root) return null;
       this.convertToDLL(root);
       return this.head;
       
    }
    
    convertToDLL(node) {
        if(!node) return;
        
        this.convertToDLL(node.left);
        
        if(this.prev === null) {
            this.head = node;
        } else {
            node.left = this.prev;
            this.prev.right = node;
        }
        
        this.prev = node;
        
        this.convertToDLL(node.right);
    } 
    
    
}
