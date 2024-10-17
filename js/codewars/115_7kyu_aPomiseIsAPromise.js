/* ---------------------------------------------------------------------------------------------- */
/*                                     A Promise is a Promise                                     */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Create a resolved javascript Promise that will return 'Hello World!'.
*/

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
async function promiseHelloWorld() {
  return await "Hello World!";
}

console.log(promiseHelloWorld());

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */
const promiseHelloWorld2 = () => Promise.resolve("Hello World!");
console.log(promiseHelloWorld2());

/* ----------------------------------------- SOLUTION 3 ----------------------------------------- */
function promiseHelloWorld3() {
  // replace this nonsense with your Promise
  return new Promise((resolve, reject) => {
    return resolve("Hello World!");
  });
}

console.log(promiseHelloWorld3());
