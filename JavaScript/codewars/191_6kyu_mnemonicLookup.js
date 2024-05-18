/* ---------------------------------------------------------------------------------------------- */
/*                                         Mnemonic Lookup                                        */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 6 kyu

Mnemonics are wonderful tools to help us remember the order of things that we might otherwise have trouble remembering.

This kata comes with preloaded global objects where key : value pairs represents the word in the mnemonic and the actual word - respectively. Keys are always lowercase strings.

For example see, the two objects - rainbow and hardness below:

const rainbow = {
    run: 'red',
    over: 'orange',
    your: 'yellow',
    garden: 'green',
    bringing: 'blue',
    in: 'indigo',
    violets: 'violet'
}

const hardness = {
    tall: 'Talc',
    gyroscopes: 'Gypsum',
    can: 'Calcite',
    fly: 'Fluorite',
    apart: 'Apatite',
    orbiting: 'Orthoclase',
    quickly: 'Quartz',
    to: 'Topaz',
    complete: 'Corundum',
    disintegration: 'Diamond'
}

Notice how the keys (run over your garden bringing in violets) provide the mnemonic for the values (red, orange, yellow, green, blue, indigo, violet).

Your task is to write a mnemonic lookup function. The function will take two arguments: group and word.

The [Group] argument identifies the preloaded object, (eg: rainbow and hardness). The [Word] argument identifies a key from that object, (eg: run from the rainbow object).

If the [Group] argument identifies an object that doesn’t exist, (for example, there is no object called blue), then return a string: “There is no mnemonic for this.”

If the [Group] does exist (eg: rainbow) but does not include the [Word] as a key (eg: rainbow does not include the key rose) then return a string: "You're onto something, but still quite far off.".

If the [Group] does exist (eg: rainbow) and does have [Word] as a key (eg: run), then return the value for that key (ie: red).

*/

const hardness = {
  tall: "Talc",
  gyroscopes: "Gypsum",
  can: "Calcite",
  fly: "Fluorite",
  apart: "Apatite",
  orbiting: "Orthoclase",
  quickly: "Quartz",
  to: "Topaz",
  complete: "Corundum",
  disintegration: "Diamond",
};

/* ----------------------------------------- SOLUTION 1 ----------------------------------------- */
function mnemonicLookup(group, word) {
  try {
    return eval(group)[word] || "You're onto something, but still quite far off.";
  } catch (e) {
    return "There is no mnemonic for this.";
  }
}

console.log(mnemonicLookup("hardness", "blue"));
console.log(mnemonicLookup("blue", "tall"));
console.log(mnemonicLookup("hardness", "tall"));

/* ----------------------------------------- SOLUTION 2 ----------------------------------------- */
function mnemonicLookup2(group, word) {
  return global[group] ? (global[group][word] ? global[group][word] : "You're onto something, but still quite far off.") : "There is no mnemonic for this.";
}

console.log(mnemonicLookup2("hardness", "blue"));
console.log(mnemonicLookup2("blue", "tall"));
console.log(mnemonicLookup2("hardness", "tall"));
