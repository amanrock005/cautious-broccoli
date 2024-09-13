mirror(node) {
        // your code here
        if(node === null) {
            return;
        }
        
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        
        this.mirror(node.left);
        this.mirror(node.right);
    }
