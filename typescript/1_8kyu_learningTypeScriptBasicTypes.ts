/* ---------------------------------------------------------------------------------------------- */
/*                                Learning TypeScript. Basic Types                                */
/* ---------------------------------------------------------------------------------------------- */

/*
In this kata you'll get familiar with TypeScript's basic types.

If you have problems solving this kata please refer to this article: 
https://www.typescriptlang.org/docs/handbook/basic-types.html

Boolean
• Export var1Boolean variable of boolean type with value true.

Number
• Export var2Decimal variable of numeric type with decimal value 13.
• Export var3Hex variable of numeric type with hex value f00d.
• Export var4Binary variable of numeric type with binary value 111111.
• Export var5Octal variable of numeric type with octal value 744.

String
• Export var6String variable of string type with value Hello, world!.

Array
• Export var7Array variable of array type with value [1, 'test', {a: 3}, 4, 5].
• Export var8NumericArray variable of numeric generic array type with value [1, 2, 3, 4, 5].

Tuple
• Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same.
• Export var9Tuple variable of tuple type with value ['key', 12345] - i.e. it should represent a value as a pair of a string and a number.

Enums
• Export var10Enum variable with value Color.Blue from enum export enum Color {Red = 1, Green = 2, Blue = 4}.

Any 
    We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content, e.g. from the user or a 3rd party library. In these cases, we want to opt-out of type-checking and let the values pass through compile-time checks. To do so, we label these with the any type.

• Export var11ArrayOfAny variable of Array<any> type with value [1, 'test', {a: 3}, 4, 5].

Void
• Export var12VoidFunction function that returns void.

Null and Undefined
• Export var13Null variable with type and value null.
• Export var14Undefined variable with type and value undefined.

Never
• Export var15NeverFunction function that returns never value.

*/

//! Boolean
export var var1Boolean: boolean = true;

//! Numbers
export var var2Decimal: number = 13;
export var var3Hex: number = 0xf00d; // Hexadecimal numbers should start with 0x
export var var4Binary: number = 0b111111; // Binary numbers should start with 0b
export var var5Octal: number = 0o744; // Octal numbers should start with 0o

//! Strings
export var var6String: string = "Hello, world!";

//! Arrays
export var var7Array: any[] = [1, "test", { a: 3 }, 4, 5];
export var var8NumericArray: number[] = [1, 2, 3, 4, 5];

//! Tuples
export var var9Tuple: [string, number] = ["key", 12345]; // Added type annotation and initialized the tuple

// ! Enums
export enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
export var var10Enum: Color = Color.Blue; // Added type annotation for clarity

//! Any
export var var11ArrayOfAny: any[] = [1, "test", { a: 3 }, 4, 5]; // Changed to 'any[]' for a more standard syntax

//! Functions
export function var12VoidFunction(): void {
  // No return needed; void means it doesn't return anything
}

//! Null and Undefined
export var var13Null: null = null;
export var var14Undefined: undefined = undefined;

//! Never type
export function var15NeverFunction(): never {
  throw new Error("This function never returns"); // Adjusted to throw an error
}
