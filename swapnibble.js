function swapNibbles(n) {
 if (n<1 || n>255) {
  throw new Error("Input must be between 1 and 255");
 }
 
 let highNibble = (n & 0xF0) >> 4;
 let lowNibble = (n & 0x0F) << 4;
 return highNibble | lowNibble;
}


let n =145;
let swapped = swapNibbles(n);
console.lgo(`Orginal number: ${n} (0x${n.toString(16).toUpperCase()})`);
console.log(`swapped number: ${swapped} (0x${swapped.toString.toString(16).toUpperCase()})`)
