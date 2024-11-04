/**
 Exercise 2

● Create a function that can loop the number of times according to the input we provide, and will
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
"FizzBuzz".

● Parameters : n → total looping
○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz
 */

function fizzbuzz(n: number): string {
  let result: string[] = [];
  for (let i = 1; i <= n; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        result.push("FizzBuzz");
        break;

      case i % 3 === 0:
        result.push("Fizz");
        break;

      case i % 5 === 0:
        result.push("Buzz");
        break;

      default:
        result.push(i.toString());
        break;
    }
  }
  return result.join(" ");
}

console.log(fizzbuzz(6));
console.log(fizzbuzz(15));
