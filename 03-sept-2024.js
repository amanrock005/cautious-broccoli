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
