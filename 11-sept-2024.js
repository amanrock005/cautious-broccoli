class Solution {
    
    containsNine(num) {
        while(num>0) {
            if(num%10===9) {
                return true;
            }
            num = Math.floor(num/10)
        }
        return false;
    }
    
    findNth(n) {
        let count = 0;
        let currentNum = 0;
        
        while(count < n) {
            currentNum++;
            if(!this.containsNine(currentNum)) {
                count++;
            }
        }
        return currentNum;
    }
    
    
}


///////////////////

class Solution {
    
    findNth(n) {
      let result = 0;
      let base = 1;
      
      while(n > 0) {
          result += (n%9) * base;
          n = Math.floor(n/9);
          base *= 10;
      }
      return result;
    }
    
    
}


class Solution {
    // Function to return the minimum cost of connecting the ropes.
    minCost(arr) {
        // create a min-heap using a priority queue
        const minHeap = new MinHeap();
        let totalCost = 0;
        
        //inserting all rope length into the min-heap
        for(let length of arr) {
            minHeap.insert(length);
        }
        
        while(minHeap.size() > 1) {
            let firstMin = minHeap.extractMin(); // get the smallest rope
            let secondMin = minHeap.extractMin(); // get the second smallest rope
            // the cost to connect these two ropes
            let cost = firstMin + secondMin;
            //add the cost to the total cost
            totalCost += cost;
            
            //insert the enw combined rope length back into the heap
            minHeap.insert(cost);
            
        }
        return totalCost;
    }
}

class MinHeap{
    constructor() {
        this.heap = [];
    }
    
    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    bubbleUp() {
        let index = this.heap.length - 1;
        while(index > 0) {
            let parentIndex = Math.floor((index-1)/2);
            if(this.heap[parentIndex] > this.heap[index]) {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }
    
    extractMin() {
        if(this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }
    
    bubbleDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];
        while(true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let swapIndex = null;
            
            if(leftChildIndex < length && this.heap[leftChildIndex] < element){
                swapIndex = leftChildIndex;
            }
            
            if(rightChildIndex < length && this.heap[rightChildIndex] < (swapIndex === null ? element : this.heap[leftChildIndex])) {
                swapIndex = rightChildIndex;
            }
            
            if(swapIndex === null) break;
            [this.heap[index], this.heap[swapIndex]] = [this.heap[swapIndex], this.heap[index]];
            index = swapIndex;
        }
    }
    
    size() {
        return this.heap.length;
    }
}
