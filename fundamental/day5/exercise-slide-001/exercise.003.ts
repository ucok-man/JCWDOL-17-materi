/**
 Write a function from a given array of numbers and return the second smallest number
    a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
 */

function secondSmallest(arr: number[]): number {
  const unique = new Set(arr);
  const sortedarr = [...unique].sort((a, b) => a - b);
  return sortedarr.at(1);
}

console.log(secondSmallest([5, 3, 1, 7, 2, 6]));
console.log(secondSmallest([5, 5, 4, 4, 6, 8]));
