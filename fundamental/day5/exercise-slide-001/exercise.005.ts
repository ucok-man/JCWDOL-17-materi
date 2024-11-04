/**
 Write a function that adds an element to the end of an array. However, the element should only be added if it is
not already in the array.
    a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
    b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
 */

function addToIfUnique(arr: number[], element: number): number[] {
  const exist = arr.find((item) => item === element);
  if (!exist) {
    arr.push(element);
  }
  return arr;
}

console.log(addToIfUnique([1, 2, 3, 4], 4));
console.log(addToIfUnique([1, 2, 3, 4], 7));
