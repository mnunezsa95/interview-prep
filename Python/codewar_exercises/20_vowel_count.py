# ------------------------------------------------------------------------------------------------ #
#                                            Vowel Count                                           #
# ------------------------------------------------------------------------------------------------ #

"""
Difficulty: 7 kyu

Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
"""


# ------------------------------------------ SOLUTION 1 ------------------------------------------ #
def get_count(sentence):
    count = 0
    vowels = ["a", "e", "i", "o", "u"]
    for letter in sentence:
        if letter in vowels:
            count += 1

    return count


print(get_count("bcdfghjklmnpqrstvwxz y"))
print(get_count("abracadabra"))


# ------------------------------------------ SOLUTION 2 ------------------------------------------ #
def get_count2(sentence):
    return sum(1 for letter in sentence if letter in ["a", "e", "i", "o", "u"])


print(get_count2("bcdfghjklmnpqrstvwxz y"))
print(get_count2("abracadabra"))
