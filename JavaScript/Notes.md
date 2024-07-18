# Table of Contents

| No. | Concept                                                                                                                |
| --- | -----------------------------------------------------------------------------------------------------------------------|
|  1  | [Using the in keyword](#1-using-the-in-keyword)
|  2  | [Using values to find the corresponding keys in an object](#2-using-values-to-find-the-corresponding-keys-in-an-object)|


### 1. Using the `in` keyword
- The `in` keyword in JavaScript can be used to search if key exists in a dictionary.

```JS
const vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 };

function encode(string) {
  return string
    .split("")
    .map((char) => {
      if (char in vowels) return vowels[char];
      else return char;
    })
    .join("");
}
```
**[⬆ Back to Top](#table-of-contents)**



### 2. Using values to find the corresponding keys in an object
- A combination of the `Object.keys()` and `Object.values()`. `indexOf()` can be used to find the matching location 

```js
function decode(string) {
  const numValues = Object.values(vowels);
  const keys = Object.keys(vowels);

  return string
    .split("")
    .map((char) => {
      // Find the index of the the number character in numValues array
      const index = numValues.indexOf(+char);

      // If the index is not -1, return the correspond char in the keys array, else return original char
      return index !== -1 ? keys[index] : char;
    })
    .join("");
}
```

**[⬆ Back to Top](#table-of-contents)**