function charFrequency(str) {
  let frequency = {};
  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  let sortedFrequency = {};
  Object.keys(frequency)
    .sort()
    .forEach((key) => {
      sortedFrequency[key] = frequency[key];
    });

  return sortedFrequency;
}

let result = charFrequency("hello world");
console.log(result);
