/* ---------------------------------------------------------------------------------------------- */
/*                               Extract the domain name from a URL                               */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 5 kyu

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

- url = "http://github.com/carbonfive/raygun" -> domain name = "github"
- url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
- url = "https://www.cnet.com"                -> domain name = cnet"
*/

function domainName(url) {
  let domain = url.replace("http://", "").replace("https://", "").replace("www.", "");
  return domain.split(".")[0];
}

console.log(domainName("http://google.co.jp"));
console.log(domainName("https://youtube.com"));
console.log(domainName("http://google.com"));
console.log(domainName("www.xakep.ru"));
