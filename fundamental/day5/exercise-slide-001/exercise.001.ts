/**
 Write a function to get the lowest, highest and average value in the array (with and without sort function).
    a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
 */

function statistic(
  arr: number[],
  withsortFn: boolean = false
): [number, number, number] {
  const result: [number, number, number] = [0, 0, 0];

  if (!withsortFn) {
    let lowest: number = Number.MAX_VALUE;
    let highest: number = Number.MIN_VALUE;
    let total: number = 0;

    arr.forEach((item) => {
      if (item < lowest) {
        lowest = item;
      }

      if (item > highest) {
        highest = item;
      }

      total += item;
    });

    result[0] = lowest;
    result[1] = highest;
    result[2] = total / arr.length;

    return result;
  }

  const copyarr = [...arr];
  const sortedarr = copyarr.sort((a, b) => a - b);

  result[0] = sortedarr.at(0);
  result[1] = sortedarr.at(sortedarr.length - 1);
  result[2] =
    sortedarr.reduce((prev, current) => prev + current, 0) / sortedarr.length;

  return result;
}

console.log(statistic([12, 5, 23, 18, 4, 45, 32]));
console.log(statistic([12, 5, 23, 18, 4, 45, 32], true));
