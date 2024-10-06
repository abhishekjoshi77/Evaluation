function reverseWords(s) {
  const xyz = s.split (' ');
  
  const reverseWords = xyz.map(xyz =>xyz.split('').reverse().join(''));
  
  return reverseWords.join(' ');
}
  const result = reverseWords("JavaScript is fun");
console.log(result);
// Output: "tpircSavaJ si nuf"

