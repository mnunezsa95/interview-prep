# ------------------------------------------------------------------------------------------------ #
#                                         Inspiring String                                         #
# ------------------------------------------------------------------------------------------------ #

"""
Difficulty: 7kyu

Given a string of space separated words, return the longest word.
If there are multiple longest words, return the rightmost longest word.

Examples
"red white blue"  =>  "white"
"red blue gold"   =>  "gold"

"""


def longest_word(string_of_words):
    # separate out the words into a list
    lst = string_of_words.split(" ")
    longest = lst[0]
    for word in lst:
        if len(word) >= len(longest):
            longest = word
    return longest


print(longest_word("forward each step going"))
