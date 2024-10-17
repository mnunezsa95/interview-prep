/* ---------------------------------------------------------------------------------------------- */
/*                                        Image Files Only                                        */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

Build a function that will take an array of filenames (as string) and return an array of array. Each array will provide 3 informations about the image file: the full filename, its name and the extension. (See the example below)

Detect the image files based on the end of the filename which is their format (extension).
Image files are defined as jpg, gif, png, tiff, svg and bmp. So "puppies.jpg" is a image file while "puppies.html" is not.

For example:
Input: ["imgName.extension", "notAnImg"]
Output: [["imgName.extension", "imgName", "extension"], null]

So:
imageFilter(["index.html", "favicon.gif"])
return [null, ["favicon.gif", "favicon", "gif"]] 

!Non Case Sensitive, so a file with the extension .jpg or .JPG is still an image.
*/

function imageFilter(arr) {
  const fileExtensions = ["jpg", "gif", "png", "tiff", "svg", "bmp"];

  return arr.map((item) => {
    let lastDotIndex = item.lastIndexOf(".");

    if (lastDotIndex === -1) return null; // No dot found, return null
    let fileName = item.slice(0, lastDotIndex); // Create filename
    let extension = item.slice(lastDotIndex + 1); // Create extension

    // Check if both fileName and extension are valid and if extension is in the list
    if (!fileName || !extension || !fileExtensions.includes(extension.toLowerCase())) return null;

    return [item, fileName, extension];
  });
}

console.log(imageFilter(["favicon.gif", "img.tiff"]));
console.log(imageFilter([".bash_profile", "workspace.doc", "img0912.jpg"]));
console.log(imageFilter(["index.html", "seattle.JPG"]));
console.log(imageFilter([".tiff"]));
