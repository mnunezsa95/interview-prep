/* ---------------------------------------------------------------------------------------------- */
/*                                         Building Blocks                                        */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Write a class Block that creates a block (Duh..)

Requirements
The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

Define these methods:

`getWidth()` return the width of the `Block`
`getLength()` return the length of the `Block`
`getHeight()` return the height of the `Block`
`getVolume()` return the volume of the `Block`
`getSurfaceArea()` return the surface area of the `Block`

Examples
    -- creates a `Block` object with a width of `2` a length of `4` and a height of `6` --
    let b = new Block([2,4,6])
    b.getWidth() // -> 2
    b.getLength() // -> 4
    b.getHeight() // -> 6
    b.getVolume() // -> 48
    b.getSurfaceArea() // -> 88

Note: no error checking is needed
*/

class Block {
  constructor(data) {
    this.width = data[0];
    this.length = data[1];
    this.height = data[2];
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getHeight() {
    return this.height;
  }

  getVolume() {
    return this.width * this.length * this.height;
  }

  getSurfaceArea() {
    return 2 * (this.length * this.width + this.width * this.height + this.height * this.length);
  }
}

let block = new Block([2, 4, 6]);
console.log(block.getWidth());
console.log(block.getLength());
console.log(block.getHeight());
console.log(block.getVolume());
console.log(block.getSurfaceArea());
