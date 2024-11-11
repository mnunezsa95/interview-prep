/* ---------------------------------------------------------------------------------------------- */
/*                                  Basic Mathematical Operations                                 */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 8 kyu

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
• ('+', 4, 7) --> 11
• ('-', 15, 18) --> -3
• ('*', 5, 5) --> 25
• ('/', 49, 7) --> 7
*/

export function basicOp(operation: string, value1: number, value2: number): number {
  const operationMap: { [key: string]: (value1: number, value2: number) => number } = {
    "+": (value1, value2) => value1 + value2,
    "-": (value1, value2) => value1 - value2,
    "*": (value1, value2) => value1 * value2,
    "/": (value1, value2) => value1 / value2,
  };

  return operationMap[operation](value1, value2);
}

console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));
