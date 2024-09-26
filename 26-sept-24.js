maxStep(arr) {
        // your code here
        // let max = 0;
        // let count = 0;
        // for(let i=0; i<arr.length - 1; i++) {
        //     count =0;
        //     while(arr[i+1] === arr[i]+1 && i<arr.length) {
        //         count++;
        //         i++;
        //     }
        //     if(count > max) {
        //         max = count;
        //     }
        // }
        // return max;
        
        let maxSteps = 0;
        let currentSteps = 0;
        
        for(let i=1; i<arr.length; i++) {
            if(arr[i] > arr[i-1]) {
                currentSteps++;
                maxSteps = Math.max(maxSteps, currentSteps);
            } else {
                currentSteps = 0;
            }
        }
        return maxSteps;
    }
