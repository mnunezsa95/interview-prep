# Table of Contents

| No. | Concept                                                                                                                |
| --- | -----------------------------------------------------------------------------------------------------------------------|
|  1  | [Using the in keyword](#1-using-the-in-keyword)                                                                        |
|  2  | [Using values to find the corresponding keys in an object](#2-using-values-to-find-the-corresponding-keys-in-an-object)|
|  3  | [Using a Recursive Function](#3-recursive-function)                                                                    |
|  4  | [Using a RegExp to find matching digits](#4-using-a-regexp-to-find-matching-digits)                                    |
|  5  | [Creating getter and setter functions](#5-creating-getter-and-setter-functions)                                        |



------------------------------------------------------------------------------------------------------------------------------------------------

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

------------------------------------------------------------------------------------------------------------------------------------------------

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

------------------------------------------------------------------------------------------------------------------------------------------------

### 3. Using a Recursive Function
- A recursive function is a function that calls itself in its definition. 

```JS
const data3 = {
  id: 1,
  items: [{ id: 2, items: [{id: 3, items: [{ id: 4 }, { id: 5 }], }, { id: 6, items: [{ id: 7 }], }, ], },],
};


function extractIds(data) {
  let ids = [];

  function traverse(obj) {
    if (Number.isFinite(obj.id)) {
      ids.push(obj.id)
    };
    // Check if the object has an 'items' property and it is an array
    if (Array.isArray(obj.items)) {
      obj.items.forEach(traverse) // Recursively traverse each item
    }; 
  }

  traverse(data); // Start traversal with the initial data object

  return ids; // ['1', '2', '3', '4', '5', '6', '7']
}

console.log(extractIds(data3));
```

**[⬆ Back to Top](#table-of-contents)**


------------------------------------------------------------------------------------------------------------------------------------------------

### 4. Using a RegExp to find matching digits
- Regular Expressions can be used to match digits in a string

```JS
const data3 = {
  id: 1,
  items: [{ id: 2, items: [{id: 3, items: [{ id: 4 }, { id: 5 }], }, { id: 6, items: [{ id: 7 }], }, ], },],
};

function extractIds2(data) {
  // Convert the data object into a string
  const str = JSON.stringify(data)

  /* 
    /.../  --  Delimits the regular expression.
    (\d+): Captures one or more digits.
      \d  --  Matches any digit (0-9).
      +   --  Quantifier that matches one or more of the preceding token.
      (...)  --  Capturing group that captures the matched substring.
    g  --  Global flag that matches all occurrences of the pattern in the string, not just the first one.
  */
  str.match(/(\d+)/g);

  return str; // ['1', '2', '3', '4', '5', '6', '7']
}

console.log(extractIds2(data3));
```

**[⬆ Back to Top](#table-of-contents)**

------------------------------------------------------------------------------------------------------------------------------------------------

### 5. Creating getter and setter functions
- Getter and setter functions are used to get and set values for an object

```JS

// The `createSecretHolder` function creates and returns an object with two methods: getSecret & setSecret
function createSecretHolder(secret) {
  return {
    secret: secret,

    // This method returns the current value of the secret
    getSecret() {
      return secret;
    },

    // This method allows updating the value of secret
    setSecret(newSecret) {
      secret = newSecret;
    },
  };
}

obj = createSecretHolder(5);
console.log(obj.getSecret()); // Gets the 'secret' value; 5
console.log(obj.setSecret(3)); // Sets the 'secret' to a value of 3 (overwrites 5)
console.log(obj.getSecret()); // Gets the new 'secret' value; 3

```

**[⬆ Back to Top](#table-of-contents)**

------------------------------------------------------------------------------------------------------------------------------------------------