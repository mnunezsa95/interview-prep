# ------------------------------------------------------------------------------------------------ #
#                                              Move 10                                             #
# ------------------------------------------------------------------------------------------------ #

"""
Difficulty: 7kyu

Move every letter in the provided string forward 10 letters through the alphabet.
If it goes past 'z', start again at 'a'.
Input will be a string with length > 0.
"""


def move_ten(st):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    result = ""

    for char in st:
        current_index = alphabet.find(char)
        new_index = current_index + 10
        if new_index >= 26:
            new_index = new_index % 26
        result += alphabet[new_index]

    return result


print(move_ten("testcase"))  # docdmkco
