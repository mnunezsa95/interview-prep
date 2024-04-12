# ------------------------------------------------------------------------------------------------ #
#                                  Remove First and Last Character                                 #
# ------------------------------------------------------------------------------------------------ #

""" 
Difficulty: 8 kyu

It's pretty straightforward. Your goal is to create a function that removes the first and last 
characters of a string. You're given one parameter, the original string. You don't have to worry 
about strings with less than two characters.
"""


def remove_char(s):
    return s[1:-1]


print(remove_char("eloquent"))
