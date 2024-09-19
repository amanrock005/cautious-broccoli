reverseWords(str) {
        // code here
        let wordsArray = str.split('.');
        let reversedArray = wordsArray.reverse();
        let reversedString = reversedArray.join('.');
        return reversedString;
    }
