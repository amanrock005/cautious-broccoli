findTwoElement(arr) {
        // your code here
        const n = arr.length;
        let sumOfArr = 0;
        let sumOfSquares = 0;
        let sumN = (n*(n+1))/2;
        let sumOfSquresN = (n* (n+1) * (2*n+1))/6;
        
        for(let i=0;i<n;i++) {
            sumOfArr += arr[i];
            sumOfSquares += arr[i] * arr[i];
        }
        
        let sumDiff = sumN - sumOfArr;
        let squareSumDiff = sumOfSquresN - sumOfSquares;
        
        let sumAB = squareSumDiff / sumDiff;
        
        let missingNumber = (sumDiff + sumAB)/2;
        let repeatingNumber = sumAB - missingNumber;
        
        return [repeatingNumber, missingNumber];
    }
