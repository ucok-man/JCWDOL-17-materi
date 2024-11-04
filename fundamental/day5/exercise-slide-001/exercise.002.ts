/**
 Write a function that takes an array of words and returns a string by concatenating the words in the array,
separated by commas and - the last word - by an 'and'.
    a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
 */

function formatarr(arr: string[]): string {
  if (arr.length < 1) {
    return "";
  }

  if (arr.length === 1) {
    return arr.at(0);
  }

  const copyarr = [...arr];
  const lastitem = copyarr.reverse().shift();
  copyarr.reverse(); // reverse back to initial state
  return copyarr.join(",") + " and " + lastitem;
}

console.log(formatarr(["apple", "banana", "cherry", "date"]));
console.log(formatarr(["apple", "banana"]));
console.log(formatarr(["apple"]));
console.log(formatarr([]));
