# ---------------------------------------------------------------------------------------------------- #
#                                       13. Remove String Spaces                                       #
# ---------------------------------------------------------------------------------------------------- #

"""
Difficulty: 8 kyu

Write a function that removes the spaces from the string, then return the resultant string.

Examples:
Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"
"""


# ------------------------------------------ SOLUTION 1 ------------------------------------------ #
def no_space(x):
    # remove empty space at end, split the string into a list, join to resulting string
    return "".join(x.strip().split(" "))


print(no_space("8aaaaa dddd r     "))


# ------------------------------------------ SOLUTION 2 ------------------------------------------ #
def no_space2(x):
    return x.replace(" ", "")


print(no_space2("8aaaaa dddd r     "))
