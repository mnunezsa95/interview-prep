/* ---------------------------------------------------------------------------------------------- */
/*                                       The old switcheroo                                       */
/* ---------------------------------------------------------------------------------------------- */

/* 
Difficulty: 7 kyu

Write a function

vowel2index(str)
that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within 
that string.

E.g:
- vowel2index('this is my string') == 'th3s 6s my str15ng'
- vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
- vowel2index('') == ''

Your function should be case insensitive to the vowels.
*/

function vowel2index(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let splitStr = str.split("");
  for (let i = 0; i < splitStr.length; i++) {
    if (vowels.includes(splitStr[i].toLowerCase())) {
      splitStr[i] = i + 1;
    }
  }
  return splitStr.join("");
}

console.log(vowel2index("this is my string")); // 'th3s 6s my str15ng'
console.log(vowel2index(""));
console.log(
  "90's c7rnh11l13 1516st19n, p24ckl28d b32tch36r yr m43ss46ng49r b53g g57str61p63b n67xt l72v74l l78gg81ngs l87st90cl93 m96d98t100t102103n try-h111rd V116c118. T122x124d126rmy g132str136p138b g142ntr146fy, m152h f156p 159rg162n164c 167nn170171 f174ng177rst181ch184 p187ckl191d v195g197n. S202203t205n s209st212213n215bl218 PBR&B c227rnh231l233 VHS. J241242n sh247rts 252ct255256lly b262tt265rs 269gh bl275g 278nt281ll284g286nts290291. 294rt297s299n K303ckst308rt311r D315Y, f320x322323 cl327ch330 s333lv336337 l340-f343 f346347r l351k353. PBR&B 362dd F367t369r371 373gh f378ng381rst385ch388 cr392y W396s 399nd402rs405n ch410411 typ416wr419t421r 424Ph427n429 b432sp435k437 f440441r l445k447, 450nt453ll456g458nts462463 ph467t469 b472473th d478r480ct tr486d488. 491492sth496t498c T502mblr P509rtl513nd X518X520 sq524525d, synth v536r538l l542st545cl548 sk552t554b556557rd f562563r d567ll570r t574575st c580rnh584l586 Bl590591 B594ttl598 s601m603604t606cs."
);
