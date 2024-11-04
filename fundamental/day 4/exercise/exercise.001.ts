/**
Create a function that can create a triangle pattern according to the height we provide like the
following :
01
02 03
04 05 06
07 08 09 10

Parameters : height → triangle height
 */

function triangle(height: number): string {
  let container: number[][] = [];
  let counter = 0;

  for (let i = 1; i <= height; i++) {
    const row: number[] = [];
    for (let j = i; j > 0; j--) {
      counter++;
      row.push(counter);
    }
    container.push(row);
  }

  const lastrow = container.at(container.length - 1);
  const maxnum = lastrow.at(lastrow.length - 1);

  const containerstr = container.map((row) => {
    return row.map((item) => {
      return formatnumber(item, maxnum);
    });
  });

  let result: string = "";
  containerstr.forEach((row) => {
    row.forEach((item) => {
      result += `${item} `;
    });
    result += "\n";
  });
  return result;
}

function formatnumber(input: number, max: number): string {
  const maxstr = max.toString().length;
  const inputstr = input.toString().length;

  const countzero = maxstr - inputstr;
  return `${countzero > 0 ? "0".repeat(countzero) : ""}${input}`;
}

console.log(triangle(4));
console.log(`\n ${"-".repeat(70)} \n`);
console.log(triangle(20));
