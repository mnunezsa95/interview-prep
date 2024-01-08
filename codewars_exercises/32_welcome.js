/* ---------------------------------------------------------------------------------------------- */
/*                                            Welcome!                                            */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 8 kyu

Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. 
Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API
that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database. Write a 'welcome' function that takes a parameter 'language', with 
a type String, and returns a greeting - if you have it in your database. It should default to English if the language 
is not in the database, or in the event of an invalid input.
*/

function greetQ21(language) {
  const languages = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };
  if (languages[language.toLowerCase()]) {
    return languages[language.toLowerCase()];
  } else {
    return "Welcome";
  }
}

console.log(greetQ21("lithuanian"));
console.log(greetQ21("czech"));
console.log(greetQ21("polish"));
