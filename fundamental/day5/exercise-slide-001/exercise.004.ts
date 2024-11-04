/**
 Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays
are of the same length.
    a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
 */

function sumarray(arr1: number[], arr2: number[]): number[] {
  const result = arr1.map((_, index) => arr1[index] + arr2[index]);
  return result;
}

console.log(sumarray([1, 2, 3], [3, 2, 1]));
