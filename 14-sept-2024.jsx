   rearrange(arr) {
         let positives = [], negatives = [];

        // Step 1: Separate the positive and negative numbers into two arrays.
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 0) {
                positives.push(arr[i]);  // Consider 0 as positive
            } else {
                negatives.push(arr[i]);
            }
        }

        let posIdx = 0, negIdx = 0;
        let result = [];

        // Step 2: Interleave the positive and negative numbers.
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0 && posIdx < positives.length) {
                // Place positive number at even index
                result.push(positives[posIdx++]);
            } else if (negIdx < negatives.length) {
                // Place negative number at odd index
                result.push(negatives[negIdx++]);
            } else if (posIdx < positives.length) {
                // If no more negatives, fill with remaining positives
                result.push(positives[posIdx++]);
            } else if (negIdx < negatives.length) {
                // If no more positives, fill with remaining negatives
                result.push(negatives[negIdx++]);
            }
        }

        // Modify the original array in-place
        for (let i = 0; i < arr.length; i++) {
            arr[i] = result[i];
        }
    }
