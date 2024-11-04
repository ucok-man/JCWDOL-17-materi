/**
 ● Write a function to split a string and convert it into an array of words
    ○ Example : “Hello World” → [“Hello”, “World”]  
 */

function splitToWord(input: string): string[] {
  const words = input.split(/\s/g);
  return words.filter((word) => word.length >= 1);
}

console.log(splitToWord("Hello, world!"));
console.log(splitToWord("Hello, \tworld!\n\nline \t ke dua"));
