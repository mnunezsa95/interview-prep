# ------------------------------------------------------------------------------------------------ #
#                       Replace All Vowel to Xxclamation Mark in the Sentence                      #
# ------------------------------------------------------------------------------------------------ #

"""
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
"""


# ------------------------------------------ SOLUTION 1 ------------------------------------------ #
def replace_exclamation(st):
    vowels = ["a", "e", "i", "o", "u"]
    st = list(st)
    for i in range(len(st)):
        if st[i].lower() in vowels:
            st[i] = "!"

    return "".join(st)


# ------------------------------------------ SOLUTION 2 ------------------------------------------ #
def replace_exclamation2(s):
    vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    for a in s:
        if a in vowels:
            s = s.replace(a, "!")

    return s


print(replace_exclamation("aeiou"))
print(replace_exclamation2("aeiou"))
