/* ---------------------------------------------------------------------------------------------- */
/*                            Safen User Input Part 1: htmlspecialchars                           */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 8 Kyu

Instructions: ou are an average Web Developer who owns a professional website which contains form fields 
so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. 
Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS 
(Cross Site Scripting). This is done by injecting script tags into the website through form fields which 
may contain malicious code (e.g. a redirection to a malicious website that steals personal information).

Mission: To implement a function that converts the following potentially harmful characters:
1. < --> &lt;
2. > --> &gt;
3. " --> &quot;
4. & --> &amp;
*/

function htmlSpecialChars(formData) {
  let res = ""; // variable to hold resulting string

  // split the incoming data; do something for each char in the split list
  formData.split("").forEach((char) => {
    if (char === "<") {
      res += "&lt;";
    } else if (char === ">") {
      res += "&gt;";
    } else if (char === '"') {
      res += "&quot;";
    } else if (char === "&") {
      res += "&amp;";
    } else {
      res += char;
    }
  });
  return res; // return the resulting string
}

console.log(htmlSpecialChars("<h2>Hello World</h2>")); // "&lt;h2&gt;Hello World&lt;/h2&gt;";
console.log(htmlSpecialChars("<script>alert('Website Hacked!');</script>"));
console.log(htmlSpecialChars("Hello, how would you & I fare?"));
