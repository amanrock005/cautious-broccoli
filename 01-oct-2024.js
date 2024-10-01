class Solution {
    /**
    * @param Node root1
    * @param Node root2

    * @returns number[]
    */
    
    inorderTraversal(root, result) {
        if(root === null) return;
        this.inorderTraversal(root.left, result);
        result.push(root.data);
        this.inorderTraversal(root.right, result);
    }
    
    mergeSortedArrays(arr1, arr2) {
        let i = 0, j = 0;
        let merged = [];
        
        while(i<arr1.length && j<arr2.length) {
            if(arr1[i] <= arr2[j]) {
                merged.push(arr1[i]);
                i++;
            } else {
                merged.push(arr2[j]);
                j++;
            }
        }
        
        while(i<arr1.length) {
            merged.push(arr1[i]);
            i++;
        }
        
        while(j<arr2.length) {
            merged.push(arr2[j]);
            j++;
        }
        
        return merged;
    }
    
    merge(root1, root2) {
        // code here
        let arr1 = [];
        let arr2 = [];
        this.inorderTraversal(root1, arr1);
        this.inorderTraversal(root2, arr2);
        
        return this.mergeSortedArrays(arr1, arr2);
    }
}
