class Solution {
    SumofMiddleElements(arr1, arr2) {
        // Code Here
        arr1.push(...arr2);
        arr1.sort((a,b) => a-b);
        const s = arr1.length;
        const sum = arr1[Math.floor(s/2)] + arr1[Math.floor((s/2)-1)];
        return sum;
    }
}
