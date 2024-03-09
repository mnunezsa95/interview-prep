# ------------------------------------------------------------------------------------------------ #
#                                     Is the String Uppercase?                                     #
# ------------------------------------------------------------------------------------------------ #

"""
Difficulty: 8 kyu

Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter 
so any string containing no letters at all is trivially considered to be in ALL CAPS.
"""

import string


def is_uppercase(inp):
    special_characters = string.punctuation
    if inp not in special_characters:
        return inp.isupper()
    elif inp.isnumeric():
        return True
    else:
        return True


print(is_uppercase("hello I AM DONALD"))
print(is_uppercase("HELLO I AM DONALD"))
