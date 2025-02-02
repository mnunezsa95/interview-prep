/* ---------------------------------------------------------------------------------------------- */
/*                                      Multiplication Table                                      */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:
    1 2 3
    2 4 6
    3 6 9

For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

multiplicationTable = function (size) {
  let arrOne = Array.from({ length: size }, (_, i) => i + 1);
  let table = [arrOne];
  let i = 1;

  while (i < size) {
    i++;
    table.push(table[0].map((val) => val * i));
  }

  return table;
};

multiplicationTable(3);
multiplicationTable(4);
