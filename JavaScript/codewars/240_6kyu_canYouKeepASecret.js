/* ---------------------------------------------------------------------------------------------- */
/*                                     Can you keep a secret?                                     */
/* ---------------------------------------------------------------------------------------------- */

/*
Difficulty: 7 kyu

There's no such thing as private properties on a coffeescript object! But, maybe there are?

Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

getSecret() which returns the secret
setSecret() which sets the secret

obj = createSecretHolder(5)
obj.getSecret() # returns 5
obj.setSecret(2)
obj.getSecret() # returns 2

*/

function createSecretHolder(secret) {
  return {
    secret: secret,

    getSecret() {
      return secret;
    },

    setSecret(newSecret) {
      secret = newSecret;
    },
  };
}

obj = createSecretHolder(5);

console.log(obj.getSecret());
console.log(obj.setSecret(3));
console.log(obj.getSecret());
