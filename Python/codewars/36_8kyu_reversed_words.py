# ------------------------------------------------------------------------------------------------ #
#                                          Reversed Words                                          #
# ------------------------------------------------------------------------------------------------ #

"""
Complete the solution so that it reverses all of the words within the string passed in.
Words are separated by exactly one space and there are no leading or trailing spaces.

Example (Input --> Output):
• "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
"""


def reverse_words(s):
    words = s.split()
    r_words = words[::-1]
    return " ".join(r_words)


print(reverse_words("hello world!"))
