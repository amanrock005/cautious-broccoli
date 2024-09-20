countBuildings(height) {
        // code here
        let max = height[0];
        let count = 1;
        for(let i=1; i<height.length; i++) {
            if(height[i]>max) {
                count++;
                max=height[i];
            }
        }
        return count;
    }
