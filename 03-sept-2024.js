var letters = []

var word = "racecar"

var rword = "";

for (var i=0; i< word.length; i++) {
 letters.push(word[i]);
}

for (var i=0; i< word.length; i++) {
 rword += letters.pop();
}

if (rword === word) {
 console.log(word + "is a palindrome");
} else {
 console.log("not palindrome");
}

// implementing stack

var Stack = function() {
 this.count =0;
 this.storage = {};
 
 this.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
 }
 
 this.pop = function() {
  if(this.count === 0) {
   return undefined;
  }
  this.count--;
  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result
 }
 
 this.size = function () {
  return this.count;
 }
 
 this.peek = function() {
  return ths.storage[this.count-1];
 }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);

console.log(myStack.peek());
console.log(myStack.pop());
consol.elog(myStack.peek());



// sets
// they are like array but there are no duplicate items
// they are used to check a particular 

function mySet() {
 var collection = []; // we going to make sure you cannot add duplicate items to the array
 
 this.has = function(element) {
  return (collection.indexOf(element) !== -1);
 };
 
 this.value = function() {
  return collection;
 };
 
 this.add =function(element) {
  if(!this.has(element)) {
   index = collection.indexOf(element);
   collection.splice(index,1);
   return true;
  }
  return false;
 };
 
 this.size = function() {
  return collection.length;
 };
 
 // union is not present
 
 this.union - function(otherSet) {
  var unionSet = new mySet();
  var firstSet = this.value();
  var secondSet = otherSet.values();
  firstSet.forEach(function(e){
   unionSet.add(e);
  });
  secondSet.forEach(function(e) {
   unionSet.add(e);
  });
  return unionSet;
 };
 
 this.intersection = function(otherSet) {
  var intersectionSet = new mySet();
  var firstSet = this.value();
  firstSet.forEach(function(e) {
   if(otherSet.has(e)) {
    intersectionSet.add(e);
   }
  });
  return intersectionSet;
 };
 
 this.difference = function(otherSet) {
  var differenceSet = new mySet();
  var firstSet = this.value();
  firstSet.forEach(function(e) {,
   if(!otherSet.has(e)) {
    differenceSet.add(e);
   }
  });
  return differenceSet;
 };
 
 this.subset = function(otherSet) {
  var firstSet = this.value();
  return firstSet.every(function(value) {
   return otherSet.has(value);
  }) 
 };
 
 this.subset = function(otherSet) {
  var firstSet = this.value();
  return firstSet.every(function(value) {
   return otherSet.has(value);
  });
 };
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).value());
console.log(setB.difference(setA).value());

var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");;
setD.add("d");
console.log(setD.value());
setD.delete("a");
console.log(setD.has("a"));


// queue

function Queue() {
 collection = [];
 this.print = function() {
  console.log(collection);
 };
 
 this.enqueue = function(element) {
  collection.push(element);
 }
 this.dequeue = function() {
  return colleciton.shift();
 };
 this.front = function() {
  return collection[0];
 };
 this.size = function() {
  return collection.length;
 };
 this.isEmpty = function() {
  return (collection.length === 0);
 };
}

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();

// priority queue

function PriorityQueue () {
 var collection = [];
 this.printCollection = function() {
   (console.log(collection));
 };
 
 this.enqueue = function(element) {
  if(this.isEmpty()) {
   collection.push(element);
  } else {
   var added = false;
   for(var i=0; i<collection.length; i++) {
    if(element[i] < collection[i][j]) {
     collection.splice(i,0,element);
     added = true;
     break;
    }
   }
   if(!added) {
    collection.push(element);
   }
  }
 };
 
 this.dequeue = function() {
  var value = collection.shift();
  return value[0];
 };
 
 this.front = function() {
  return collection[0];
 };
 
 this.size = function() {
  return collection.length;
 };
 
 this.isEmpty = function() {
  return (collection.lenght === 0);
 };
}


var pq = new PriorityQueue();
pq.enqueue(['amanpreet', 2]);
pq.enqueue(['singh',1]);
pq.enqueue(['karu',3]);

//BST

class Node {
 constructor(data, left = null, right = null) {
  this.data = data;
  this.left = left;
  this.right = right;
 }
}

class BST{
 constructor() {
  this.root = null;
 }
 
 add(data) {
  const node = this.root;
  if(node === null) {
   this.root = new Node(data);
   return;
  } else {
   const searchTree = function(node) {
    if(data < node.data) {
     if(node.left === null) {
      node.left = new Node(data);
      return;
     } else if(node.left !== null) {
      return searchTree(node.left);
     }
    } else if(data > node.data) {
     if(node.right === null) {
      node.right = new Node(data);
      return;
     } else if(node.right !== null) {
      return searchTree(node.right);
     }
    } eles {
     return null;
    }
   };
   return searchTree(node);
  }
 }
 
 findMin() {
  let current = this.root;
  while (current.left !== null) {
   current = current.left;
  }
  return current.data;
 }
 
 findMax() {
  let current = this.root;
  while(current.right !== null) {
   current = current.rigth;
  }
  return current.data;
 }
 
 isPresent(data) {
  let current = this.root;
  while(current) {
   if(data === current.data) {
    return true;
   }
   if(data < current.data) {
    current = current.left;
   } else {
    current = current.right;
   }
  }
  return false;
 }
 
 remove(data) {
  const removeNode = function(node, data) {
   if(node === null) {
    return null;
   }
   if(data === node.data) {
    if(node.left === null && node.right === null) {
     return null;
    }
    
    if(node.left === null) {
     return node.right;
    }
    
    if(node.right === null) {
     return node.left;
    }
    
    var tempNode = node.right;
    while(tempNode.left !== null) {
     tempNode = tempNode.left;
    }
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
   } else if(data < node.data) {
    node.left = removeNdoe(node.left, data);
    return node;
   } else {
    node.right = removeNode(node.right, data);
    return node;
   }
  }
  this.root = removeNode(this.root, data);
 }
}

const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(5);
bst.add(7);
bst.remove(4)
console.log(bst.findMin());
console.log(bst.findMax());
bst.remove(7);
console.log(bst.findMax());
console.log(bst.isPresent(5));

// tree height and tree traversal


const bst = new NST(
 ifBalanced() {
  return (this.findMinHeight() >= this.findMaxHeight() - 1);
 }
 
 findMinHeight(node = this.root) {
  if(node == null) {
   return -1;
  };
  
  let left = this.findMinHeight(node.left);
  let right = this.findMinHeight(node.right);
  if(left < right) {
   return left + 1;
  } else {
   return right + 1;
  }
 }
 
 findMinHeight(node = this.root) {
  if(node == null) {
   return -1; 
  };
  
  let left = this.findMinHeight(node.left);
  let right = this.findMinHeight(node.right);
  if(left > right) {
   return left + 1;
  } else {
   return right + 1;
  };
 }
 
 findMaxHeight(node = this.root) {
  if(node == null) {
   return -1;
  };
  let left = this.findMaxHeight(node.left);
  let right = this.findMaxHeight(node.right);
  if(left > right) {
   return left + 1;
  } else {
   return right + 1;
  }
 }
 
 inOrder() {
  if(this.root == null) {
   return null;
  } else {
   var result = new Array();
   function traverseInOrder(node) {
    node.left && traverseInOrder(node.left);
    result.push(node.data);
    node.right && traverseInOrder(node.right);
   }
   traverseInOrder(this.root);
   return result;
  };
 }
 
 preOrder() {
  if(this.root == null) {
   return null;
  } else {
   var result = new Array();
   function traversePreOrder(node) {
    node.left && traverseInOrder(node.left);
    result.push(node.data);
    node.right && traversaInOrder(node.right);
   };
   traverseInOrder(this.root);
   return result;
  }
 }
 
 preOrder() {
  if(this.root == null) {
   return null;
  } else {
   var result = new Array();
   function traversePreOrder(node) {
    result.push(node.data);
    node.left && traversePreOrder(node.left);
    node.right && traversePreOrder(node.right);
   };
   traversePreOrder(this.root);
   return result;
  }
  
 postOrder() {
  if(this.root == null) {
   return null;
  } else {
   var result = new Array();
   function traversePostOrder(node) {
    node.left && traversePostOrder(node.left);
    node.right && traversePostOrder(node.right);
    result.push(node.data);
   };
   traversePostOrder(this.root);
   return result;
  }
 }
 
 levelOrder() {
  let result = [];
  let Q = [];
  if(this.root != null) {
   Q.push(this.root);
   whiel(Q.length > 0) {
    let node = Q.shift();
    result.push(node.data);;
    if(node.left != null) {
     Q.push(node.left);
    };
    if(node.right != null) {
     Q.push(node.right)
    };
   };
   return result;
  } else {
   return null;
  }
 }
 
 
 }
);

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalance());
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalance());

console.log('inOrder' + bst.inOrder());
console.log('preOrder' + bst.preOrder());
console.log('postOrder' + bst.postOrder());
console.log('levelOrder' + bst.levelOrder());
